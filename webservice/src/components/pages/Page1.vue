<template>
  <div id="mainPageOne"
  @click="checkDataValidity()"
  @keyup="checkDataValidity()">
    <div id="sentence">
      <p>Jetzt brauchen wir nur ein paar Daten!</p>
    </div>

    <div id="birthday">
      <div id="day">
        <div class="upper">
          <p>Day</p>
        </div>
        <div class="lower">
          <input type="text" ref="1" placeholder="D"
          @keyup="nextOrPreviousField($event, 1)"
          v-model="birthDay[0]"
          maxlength="1">
          <input type="text" ref="2" placeholder="D"
          @keyup="nextOrPreviousField($event, 2)"
          v-model="birthDay[1]"
          maxlength="1">
        </div>
      </div>
      <div id="month">
        <div class="upper">
          <p>Month</p>
        </div>
        <div class="lower">
          <input type="text" ref="3" placeholder="M"
          @keyup="nextOrPreviousField($event, 3)"
          v-model="birthMonth[0]"
          maxlength="1">
          <input type="text" ref="4" placeholder="M"
          @keyup="nextOrPreviousField($event, 4)"
          v-model="birthMonth[1]"
          maxlength="1">
        </div>
      </div>
      <div id="year">
        <div class="upper">
          <p>Year</p>
        </div>
        <div class="lower">
          <input type="text" ref="5" placeholder="Y"
          @keyup="nextOrPreviousField($event, 5)"
          v-model="birthYear[0]"
          maxlength="1">
          <input type="text" ref="6" placeholder="Y"
          @keyup="nextOrPreviousField($event, 6)"
          v-model="birthYear[1]"
          maxlength="1">
          <input type="text" ref="7" placeholder="Y"
          @keyup="nextOrPreviousField($event, 7)"
          v-model="birthYear[2]"
          maxlength="1">
          <input type="text" ref="8" placeholder="Y"
          @keyup="nextOrPreviousField($event, 8)"
          v-model="birthYear[3]"
          maxlength="1">
        </div>
      </div>
    </div>

    <div id="identification">
      <div id="id_sentence">
        <p>Wie identifizierst du dich?</p>
      </div>
      <div id="gender">
        <ul>
          <li v-for="(gender, i) in genders" :key="i"
          @click="selectGender(i)"
          :class="{gender_selected: isGenderSel(i)}">
            <p>{{ gender }}</p>
          </li>
        </ul>
      </div>
      <div id="gender_orientation">
        <ul>
          <li v-for="(genderId, i) in gendersIds" :key="i"
          @click="selectOrientation(i)"
          :class="{gender_selected: selGenderId[i]}">
            <p>{{ genderId }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import getAge from 'get-age'
import validator from 'is-my-date-valid'
const validateDate = validator({ format: 'MM-DD-YYYY' })

export default {
  data() {
    return {
      birthDay: [null, null],
      birthMonth: [null, null],
      birthYear: [null, null, null, null],
      gendersDB: ['man', 'woman'],
      genderIdsDB: ['straight', 'bi', 'gay', 'lesbian', 'trans', 'non-binary'],
      genders: ['Man', 'Woman'],
      gendersIds: ['Straight', 'Bi', 'Gay', 'Lesbian', 'Trans', 'Non-binary'],
      selGender: null,
      selGenderId: [true, false, false, false, false, false],
      birthDateIsValid: false,
      userAge: null,
      curPage: 1
    }
  },
  mounted() {
    this.$refs[1].focus()
  },
  methods: {
    checkDataValidity() {
      // bday format is mm-dd-yyyy
      const birthDay = `${this.birthDay[0]}${this.birthDay[1]}`
      const birthMonth = `${this.birthMonth[0]}${this.birthMonth[1]}`
      const birthYear = `${this.birthYear[0]}${this.birthYear[1]}${this.birthYear[2]}${this.birthYear[3]}`

      const birthDate = `${birthMonth}-${birthDay}-${birthYear}`
      
      this.birthDateIsValid = validateDate(birthDate)
      this.userAge = getAge(birthDate)

      if (this.birthDateIsValid && this.userAge
      && this.selGender && this.selGenderId.includes(true)) {
        console.log('Paga data is valid.')
        this.$store.commit('setPageDataValid')
      }
    },
    isGenderSel(i) {
      const gender = this.selGender
      const genderDB = this.gendersDB[i]

      if (gender == genderDB) {
        return true
      } else {
        return false
      }
    },
    selectOrientation(i) {
      this.selGenderId[i] = !this.selGenderId[i]
    },
    selectGender(i) {
      if (this.selGender === null) {
        this.selGender = this.gendersDB[i]
      } else if (this.selGender === 'man') {
        this.selGender = 'woman'
      } else {
        this.selGender = 'man'
      }
    },
    nextOrPreviousField(e, refNum) {
      if (e.keyCode === 8 && refNum > 1) {
        this.$refs[refNum - 1].focus()
        this.$refs[refNum - 1].select()
      } else if (refNum < 8) {
        this.$refs[refNum + 1].focus()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/mixins/centerXY';
@import '@/assets/mixins/centerX';

.gender_selected {
  background-color: white !important;
  color: black !important;
  border: 2px solid rgba(0, 0, 0, 0.7) !important;
}

#identification {
  height: 60%;
  #id_sentence {
    margin: auto;
    position: relative;
    height: 60px;
    width: 500px;
    border-top: 2px solid rgba(255, 255, 255, 0.3);
    p {
      @include centerXY;
      color: white;
      font-size: 20px;
    }
  }
  #gender_orientation {
    border-top: 2px solid rgba(0, 0, 0, 0.1);
  }
  #gender, #gender_orientation {
    height: 80px;
    width: 100%;
    text-align: center;
    align-items: center;
    display: flex;
    justify-content: center;
    ul {
      height: 100%;
      padding: 0;
      align-items: center;
      display: flex;
      justify-content: center;
      li {
        font-size: 17px;
        font-weight: bold;
        display: inline;
        margin: auto;
        margin: 10px;
        padding: 7px 20px 7px 20px;
        border-radius: 8px;
        color: white;
        border: 1px solid  rgba(255, 255, 255, 0.4);
        background-color: rgba(0, 0, 0, 0.3);
        cursor: pointer;
        &:hover {
          transition: 0.2s ease;
          transform: scale(1.05);
          border: 1px solid white;
          background-color: rgba(0, 0, 0, 0.1);
        }
      }
    }
  }
}

#birthday {
  position: relative;
  height: 40%;
  width: 100%;
  text-align: center;
  #day, #month, #year {
    display: inline-block;
    height: 100%;
    width: 150px;
  }
   #year {
     width: 300px !important;
   }
}

.upper {
  position: relative;
  height: 60%;
  width: 100%;
  p {
    @include centerX;
    bottom: 0;
    color: white;
    font-weight: bold;
    font-size: 25px;
  }
}

.lower {
  position: relative;
  height: 40%;
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
  input {
    margin: 5px;
    border: none;
    outline: none;
    height: 50px;
    width: 50px;
    display: inline;
    text-align: center;
    background-color: transparent;
    border-radius: 5px;
    color: black;
    font-size: 26px;
    &::placeholder {
      color: rgba(0, 0, 0, 0.4);
    }
  }
}

#sentence {
  position: relative;
  height: 60px;
  width: 100%;
  p {
    @include centerXY;
    color: white;
    font-size: 24px;
  }
}

#mainPageOne {
  height: 100%;
  width: 100%;
}
</style>