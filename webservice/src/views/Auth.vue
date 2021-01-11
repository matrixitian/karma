<template>
  <div class="main">
      <form>
        <transition name="slide-fade">
        <div id="center" v-if="mounted">
          <p>Create a new account</p>
          <p>Join Sproutt and find new people alike!</p>
          <input type="text" placeholder="Your first name" ref="fname">
          <input type="text" placeholder="Your email or phone number">
          <transition name="slide-fade">
            <input v-if="showForm" type="text" placeholder="Confirm email/phone number">
          </transition>
          <input type="text" placeholder="Secure password">
          <p id="err_msg">
            {{ err_msg }}
          </p>
          <p id="terms">By creating your Sproutt account, you agree to our <a>Terms</a>, <a>Data Policy</a> and <a>Cookie Policy</a>. You may receive E-Mails from us and may opt out at any time.</p>
          <button type="submit" @click.prevent>
            Create your Sproutt account
          </button>
        </div>
        </transition>
      </form>
    <div id="top">
      <button @click="showForm = !showForm">Toggle</button>
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
      <div id="license"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mounted: false,
      showForm: false,
      err_messages: [],
      err_msg: '',
      accounts: [
        {
          id: '1',
          name: 'Steve Jobs',
          lastActive: '2' // days
        },
        {
          id: '2',
          name: 'Vera Smith',
          lastActive: '2' // days
        }
      ]
    }
  },
  mounted() {
    this.mounted = true
    // this.$refs.fname.focus()
  },
  computed: {
    
  }
}
</script>

<style lang="scss" scoped>
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
  float: right;
  position: absolute;
  height: 550px;
  width: 350px;
  border-radius: 10px;
  top: 50%;
  bottom: 50%;
  right: -150px;
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

#top_placeholder {
  height: 25%;
  width: 100%;
}

#bottom_placeholder {
  height: 25%;
  width: 100%;
}

#top {
  background: rgb(6,8,98);
  background: linear-gradient(0deg, rgba(6,8,98,1) 0%, rgba(181,0,255,1) 100%);
  width: 100%;
  height: 40%;
}
#bottom {
  background-color: white;
  width: 100%;
  height: 60%;
  #login_as {
    font-size: 16px;
    font-weight: bold;
    color: rgb(93, 93, 93);
  }
  #accounts {
    padding: 0;
    width: 100%;
    height: 90%;
    .account {
      background: white;
      border-radius: 7px;
      margin: 10px;
      padding: 15px 10px 20px 10px;
      float: left;
      box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.07);
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
  #license {
    border-top: 1px solid #d8d8d8;
    border-width: 70%;
    margin: auto;
    width: 80%;
    height: 10%;
  }
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
