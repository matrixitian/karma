<template>
  <div class="main">
    <select name="langSelector" id="lang_selector"
    @change="setLanguage($event)">
      <option v-for="lang in langs" :key="lang" :value="lang">
        {{ lang }}
      </option>
    </select>
    <form :class="{loginFormHeight: !signUpForm}">
      <button id="switch_to_login"
      @click.prevent="toggleFormType()">
        {{
          signUpForm ? "Or login" : "Or sign up"
        }}
      </button>
      <p id="moto3">find people alike.</p>
      <p id="moto4">be yourself.</p>
      <transition name="slide-fade">
      <div id="center" v-if="mounted">
        <p>{{ signUpForm ? "Create a new account" : "Login to your account" }}</p>
        <p v-show="signUpForm">Join Sproutt and find new people alike!</p>
        <input v-show="signUpForm" type="text" placeholder="Your first name" ref="fname"
        v-model="name">
        <input type="text" placeholder="Your email or phone number"
        @focus="showForm = true" v-model="emailOrPhoneNum">
        <transition name="slide-fade">
          <input v-if="showForm && signUpForm" type="text" placeholder="Confirm email/phone number"
          v-model="cEmailOrPhoneNum">
        </transition>
        <input type="text" :placeholder="passwordPlaceholder()" v-model="password"
        @keyup="updatePasswordMeter()">
        <div v-show="password" id="password_strength">
          <p>Password is <span 
          :class="{
            ps_red: passwordStrength === 'Weak',
            ps_yellow: passwordStrength === 'Medium',
            ps_green: passwordStrength === 'Strong'}">
          {{ passwordStrength }}</span></p>
        </div>
        <p id="err_msg" v-if="showInfo" :class="{info_warning: errorOccured}">
          {{ curInfoMessage }}
        </p>
        <p id="terms" v-if="signUpForm">By creating your Sproutt account, you agree to our <a>Terms</a>, <a>Data Policy</a> and <a>Cookie Policy</a>. You may receive E-Mails from us and may opt out at any time.</p>
        <button type="submit" @click.prevent="authenticate()"
        :class="{loginBtnMargin: !signUpForm}">
          {{ signUpForm ? "Create your Sproutt account" : "Login" }}
        </button>
        <!-- <p id="reset_password">Forgot your password?</p> -->
      </div>
      </transition>
    </form>
    <div id="top">
      <div class="centerer">
        <p id="moto1">find people alike.</p>
        <p id="moto2">be yourself.</p>
        <img id="logo" src="@/assets/logo.svg" alt="">
        <div id="teens_container">
          <img id="teens" src="@/assets/teens.svg" alt="">
        </div>
      </div>
      
    </div>
    <div id="bottom">
      <div id="accounts">
        <div id="top_placeholder"></div>
        <ul class="accounts">
          <p id="login_as">Login as</p>

          <li class="account" v-for="(acc, i) in accounts" :key="i">
            <img :src="require(`@/assets/profile_photos/${acc.id}.png`)" alt="">
            <p>{{ acc.name }}</p>
            <p>Last active {{ acc.lastActive }} days ago.</p>
          </li>
        
          <li class="account" id="add_account">
            <p id="plus">+</p>
            <p id="text_add_account">Add Account</p>
          </li>

        </ul>
        <div id="bottom_placeholder"></div>
      </div>
      <div id="license">
        <p><span id="copyright">© Sproutt 2020</span>
        <a href="">Terms </a>
        <a href="">Privacy </a>
        <a href="">Cookies </a>
        <a href="" id="create_ad">Create Ad </a>
        <a href="">Support</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
const passwordStrength = require('check-password-strength')

export default {
  data() {
    return {
      passwordStrength: null,
      name: 'Fred',
      emailOrPhoneNum: 'holidayexplanation@gmail.com',
      cEmailOrPhoneNum: 'holidayexplanation@gmail.com',
      password: null,
      langs: [
        'english', 'deutsch', 'hrvatski'
      ],
      pageText: null,
      signUpFormText: null,
      loginFormText: null,
      signUpForm: true,
      errorOccured: false, // only for red class adding
      showInfo: false,
      mounted: false,
      showForm: false,
      curInfoMessage: null,
      accounts: [
        {
          id: '1',
          name: 'Steve Jobs',
          lastActive: '2' // days
        },
        {
          id: '1',
          name: 'Steve Jobs 2',
          lastActive: '3' // days
        }
      ]
    }
  },
  created() {
    // import translation
    const storedLang = localStorage.getItem('lang')
    const alreadySignedUp = localStorage.getItem('alreadySignedUp')

    console.log(storedLang)

    if (storedLang !== 'undefined' && storedLang !== 'null'
    && storedLang !== undefined && storedLang !== null) {
      this.pageText = require(`@/assets/translations/page_text_${storedLang}.js`)

      if (alreadySignedUp) {
        this.loginFormText = require(`@/assets/translations/login_form_text_${storedLang}.js`)
      } else {
        this.signUpFormText = require(`@/assets/translations/signup_form_text_${storedLang}.js`)
      }
    } else {
      this.pageText = require('@/assets/translations/page_text_english.js')

      if (alreadySignedUp) {
        this.loginFormText = require('@/assets/translations/login_form_text_english.js')
      } else {
        this.signUpFormText = require('@/assets/translations/signup_form_text_english.js')
      }
    }
  },
  methods: {
    updatePasswordMeter() {
      if (this.password) {
        this.passwordStrength = passwordStrength(this.password).value
      } else {
        this.passwordStrength = null
      }
    },
    authenticate() {

        if (this.signUpForm) {
          if (this.emailOrPhoneNum !== this.cEmailOrPhoneNum) {
            this.errorOccured = true
            this.curInfoMessage = this.signUpFormText.data.fieldsDontMatch
            throw new Error('E-mail/Phone number.')
          }

          const format = /[ `!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]/
          const containsSymbol = format.test(this.password)
          const passwordLen = this.password.length

          if (!containsSymbol || passwordLen < 8) {
            this.errorOccured = true
            this.curInfoMessage = this.signUpFormText.data.password
            throw new Error('Password.')
          }

          if (!window.navigator.onLine) {
            this.errorOccured = true
            this.curInfoMessage = this.signUpFormText.data.noConnection
            throw new Error('Client is offline.')
          }

          axios({
            method: 'post',
            url: 'http://localhost:3000/create-user',
            data: {
              name: this.name,
              email: this.emailOrPhoneNum,
              password: this.password
            }
          }).then((res) => {
            console.log(res)
          })
        } else {
          console.log('login')
        }
      
    },
    checkForErrors() {
        
    },
    toggleFormType() {
      this.signUpForm = !this.signUpForm
    },
    passwordPlaceholder() {
      return this.signUpForm ? 'Secure password' : 'Your password'
    },
    setLanguage(e) {
      localStorage.setItem('lang', e.target.value)
    }
  },
  mounted() {
    this.mounted = true
    setTimeout(() => {
      this.$refs.fname.focus()
    }, 100)
  },
  computed: {
    
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/mixins/unselectable';
@import '@/assets/mixins/centerX';

.ps_red { background-color: red !important; }
.ps_yellow { background-color: yellow !important; }
.ps_green { background-color: greenyellow !important; }

#password_strength {
  margin: auto;
  margin-top: -10px;
  text-align: center;
  p {
    font-size: 14px !important;
    span {
      font-size: 13px;
      padding: 4px;
      border-radius: 5px;
      border: 1px solid rgba(0, 0, 0, 0.1);
    }
  }
}

select#lang_selector {
  z-index: 1;
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 5px 2px 5px 7px;
  border: 2px solid white;
  border-radius: 6px;
  color: white;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  font-weight: bold;
  option {
    color: black;
    cursor: pointer;
  }
}

.loginBtnMargin {
  margin-top: 70px !important;
}

.loginFormHeight {
  height: 320px !important;
}

#license {
  #copyright {
    font-weight: bold;
  }
  p {
    margin-top: 12px;
    font-size: 15px;
  }
  span {
    font-size: 17px;
  }
  a:nth-child(2) {
    margin-left: 50px;
  }
  a {
    margin-right: 20px;
    text-decoration: none;
  }
  #create_ad {
    background: rgb(27, 209, 21);
    background: linear-gradient(270deg, rgb(56, 212, 69) 0%, rgb(111, 245, 122) 100%);
    padding: 3px 6px 3px 6px;
    border-radius: 7px;
    color: white;
    font-weight: bold;
    box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.12);
    border: 1px solid transparent;
    &:hover {
      border: 1px solid rgb(31, 190, 39);
    }
  }
}

$breakpoint-tablet: 768px;
@media only screen and (max-width: 1320px) {
  #bottom {
    // fixes child moving parent...
    padding-top: 1px;
    margin-top: -1px;
  }
  #accounts {
    margin-top: -70px !important;
  }
  form {
    right: -150px !important;
  }
  #teens_container {
    right: 250px !important;
  }
  #moto1, #moto2 {
    visibility: hidden;
  }
  #moto3, #moto4 {
    visibility: visible;
  }
}

@media only screen and (max-width: 1100px) {
  #accounts {
    transform: scale(0.8);
    margin-left: -100px !important;
    height: 100% !important;
  }
}

@media only screen and (min-width: 1320px) {
  #moto3, #moto4 {
    visibility: hidden;
  }
}

#switch_to_login {
  margin-top: -50px;
  right: 0;
  position: absolute;
  border-radius: 9px;
  background: rgb(6,8,98);
  background: linear-gradient(340deg, rgb(15, 106, 192) 0%, rgb(28, 164, 255) 100%);
  color: white;
  font-size: 15px;
  width: 150px;
  padding: 10px 0 10px 0;
  border: 2px solid white;
  outline: none;
  &:hover {
    transition: .1s ease-in-out;
    border: 4px solid white;
    // border-color: rgb(109, 177, 255);
  }
}

#moto1, #moto2, #moto3, #moto4 {
  @include unselectable;
  color: white;
  font-weight: bold;
  position: absolute;
}

#moto3 {
  top: -50px;
  font-size: 20px;
}

#moto4 {
  top: -30px;
  font-size: 20px;
}

#moto1 {
  bottom: 40px;
  margin-left: 60px;
  font-size: 30px;
}

#moto2 {
  bottom: 10px;
  margin-left: 60px;
  font-size: 30px;
}

#logo {
  height: 70px;
  position: absolute;
  margin: 50px;
}

.centerer {
  width: 1500px;
  margin: auto;
}

p {
  @include unselectable;
}

#top {
  background: rgb(6,8,98);
  background: linear-gradient(90deg, rgb(90, 11, 255) 0%, rgb(254, 103, 203) 100%);
  width: 100%;
  height: 40%;
  position: relative;
  #teens_container {
    position: absolute;
    bottom: 0;
    width: 600px;
    height: 250px;
    right: 500px;
    #teens {
    @include unselectable;
      width: 500px;
      height: 250px;
    }
  }
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter-from, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

form {
  z-index: 100;
  float: right;
  position: absolute;
  height: 550px;
  width: 350px;
  border-radius: 10px;
  top: 50%;
  bottom: 50%;
  right: 100px;
  transform: translate(-50%, -50%);
  background-color: white;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.07);
  div#center {
    // background-color: blue;
    width: 80%;
    margin: auto;
    p:nth-child(1) {
      margin-top: 30px;
      font-weight: bold;
      font-size: 25px;
    }
    p:nth-child(2) {
      margin-top: 5px;
      margin-bottom: 20px;
    }
    input {
      margin-top: 15px;
      border: none;
      outline: none;
      background-color: rgba(0, 0, 0, 0.12);
      border-radius: 9px;
      font-size: 15px;
      width: calc(100% - 13px);
      padding: 10px 0 10px 10px;
    }
    p#terms {
      padding-top: 60px;
      font-size: 14px;
    } 
    a {
      font-weight: bold;
      color: rgb(0, 89, 255);
      cursor: pointer;
      &:hover {
        color: rgb(56, 149, 211);
      }
    }
    button {
      border-radius: 9px;
      background: rgb(6,8,98);
      background: linear-gradient(340deg, rgb(90, 11, 126) 0%, rgba(181,0,255,1) 100%);
      color: white;
      font-size: 15px;;
      margin-top: 15px;
      width: 100%;
      padding: 10px 0 10px 0;
      border: 2px solid white;
      outline: none;
      &:hover {
        transition: .15s ease;
        transform: scale(1.03);
      }
    }
  }
}

p {
  margin: 0;
}

#reset_password {
  color:rgb(255, 255, 255);
  font-weight: bold;
  border-radius: 20px;
  padding: 5px 12px 5px 12px;
  background: rgb(21, 150, 209);
  background: linear-gradient(270deg, rgb(21, 150, 209) 0%, rgb(14, 91, 233) 100%);
  font-size: 14px;
  bottom: -40px;
  left: 50%;
  transform: translateX(-50%);
  margin: auto;
  position: absolute;
  cursor: pointer;
  &:hover {
    transition: .5s ease;
    background: rgb(21, 150, 209);
  }
  // box-shadow: 0px 0px 6px 3px rgba(0, 0, 0, 0.15);
}

#err_msg {
  width: calc(80% - 10px);
  position: absolute;
  color: white;
  margin-top: 10px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 15px;
  text-align: center;
  padding: 5px;
  background: rgb(27, 209, 21);
  background: linear-gradient(270deg, rgb(56, 212, 69) 0%, rgb(111, 245, 122) 100%);
}

.info_warning {
  background: rgb(209, 90, 21) !important;
  background: linear-gradient(270deg, rgb(223, 114, 64) 0%, rgb(219, 62, 34) 100%) !important;
}

#top_placeholder {
  height: 25%;
  width: 100%;
}

#bottom_placeholder {
  height: 25%;
  width: 100%;
}

#bottom {
  background-color: white;
  width: 100%;
  height: 60%;
  // fixes child moving parent...
  padding-top: 1px;
  margin-top: -1px;
  #login_as {
    font-size: 16px;
    font-weight: bold;
    color: rgb(93, 93, 93);
  }
  #accounts {
    padding: 0;
    margin: auto;
    margin-top: -70px;
    max-width: 1500px;
    height: 100%;
    .account {
      background: white;
      border-radius: 7px;
      margin: 10px;
      padding: 15px 10px 20px 10px;
      float: left;
      box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.07);
      cursor: pointer;
      &:hover {
        transition: .2s ease;
        transform: scale(1.05);
      }
      img {
        height: 150px;
        width: 150px;
        border-radius: 100%;
      }
      p {
        text-align: center;
        font-weight: bold;
      }
      p:nth-child(2) {
        font-size: 20px;
        margin-top: 10px;
      }
      p:nth-child(3) {
        font-size: 12px;
        margin-top: 10px;
        color: rgba(0, 0, 0, 0.6)
      }
    }
    #add_account {
      background-color: rgba(0, 132, 255, 0.1) !important;
      box-shadow: none !important;
      height: 215px;
      width: 150px;
      #plus {
        color: rgb(0, 132, 255);
        font-weight: bold;
        font-size: 100px !important;
      }
      p {
        margin: 0 !important;
      }
      p#text_add_account {
        color: rgb(0, 132, 255);
        font-size: 18px;
      }
    }
  }
}

 #license {
    position: absolute;
    bottom: 0;
    border-top: 1px solid #d8d8d8;
    border-width: 70%;
    width: 80%;
    height: 50px;
    @include centerX;
  }

.main {
  padding: 0 !important;
  margin: 0 !important;
  background-color: black;
  width: 100vw !important;
  height: 100vh !important;
  // border: 4px solid white;
}
</style>
