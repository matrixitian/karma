<template>
  <div id="mainPageOne">
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
          @keyup="nextOrPreviousField($event, 1)">
          <input type="text" ref="2" placeholder="D"
          @keyup="nextOrPreviousField($event, 2)">
        </div>
      </div>
      <div id="month">
        <div class="upper">
          <p>Month</p>
        </div>
        <div class="lower">
          <input type="text" ref="3" placeholder="M"
          @keyup="nextOrPreviousField($event, 3)">
          <input type="text" ref="4" placeholder="M"
          @keyup="nextOrPreviousField($event, 4)">
        </div>
      </div>
      <div id="year">
        <div class="upper">
          <p>Year</p>
        </div>
        <div class="lower">
          <input type="text" ref="5" placeholder="Y"
          @keyup="nextOrPreviousField($event, 5)">
          <input type="text" ref="6" placeholder="Y"
          @keyup="nextOrPreviousField($event, 6)">
          <input type="text" ref="7" placeholder="Y"
          @keyup="nextOrPreviousField($event, 7)">
          <input type="text" ref="8" placeholder="Y"
          @keyup="nextOrPreviousField($event, 8)">
        </div>
      </div>
    </div>

    <div id="identification">
      <div id="id_sentence">
        <p>Wie identifizierst du dich?</p>
      </div>
      <div id="gender">
        <ul>
          <li v-for="gender in genders" :key="gender">
            {{ gender }}
          </li>
        </ul>
      </div>
      <div id="gender_orientation">
        <ul>
          <li v-for="genderId in gendersIds" :key="genderId">
            {{ genderId }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      genders: ['Man', 'Woman'],
      gendersIds: ['Bi', 'Gay', 'Lesbian', 'Trans', 'Non-binary']
    }
  },
  mounted() {
    this.$refs[1].focus()
  },
  methods: {
    nextOrPreviousField(e, refNum) {
      console.log(e.keyCode)

      if (e.keyCode === 8 && refNum > 1) {
        this.$refs[refNum - 1].focus()
        this.$refs[refNum - 1].select()
      } else {
        this.$refs[refNum + 1].focus()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/mixins/centerXY';
@import '@/assets/mixins/centerX';

#identification {
  background-color: rgb(161, 115, 28);
  height: 60%;
  #id_sentence {
    margin: auto;
    position: relative;
    height: 60px;
    width: 500px;
    border-top: 2px solid gray;
    background-color: yellow;
    p {
      @include centerXY;
    }
  }
  #gender {
    height: calc(50% - 60px);
    width: 100%;
    background-color: blueviolet;
    text-align: center;
    align-items: center;
    display: flex;
    justify-content: center;
    ul {
      background-color: green;
      height: 100%;
      padding: 0;
      align-items: center;
      display: flex;
      justify-content: center;
      li {
        display: inline;
        margin: auto;
        margin: 10px;
        padding: 7px 20px 7px 20px;
        border-radius: 8px;
        background-color: rgba(0, 0, 0, 0.3);
      }
    }
  }
}

#birthday {
  position: relative;
  height: 40%;
  width: 100%;
  background-color: rgb(88, 75, 50);
  text-align: center;
  #day, #month, #year {
    display: inline-block;
    height: 100%;
    width: 150px;
    background-color: red;
  }
   #year {
     width: 300px !important;
   }
}

.upper {
  position: relative;
  height: 60%;
  width: 100%;
  background-color: rgb(50, 50, 110);
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
    border-bottom: 5px solid rgb(44, 83, 189);
    height: 50px;
    width: 50px;
    display: inline;
    text-align: center;
    background-color: transparent;
    border-radius: 5px;
    color: black;
    font-size: 20px;
    &::placeholder {
      color: gray;
    }
  }
}

#sentence {
  position: relative;
  height: 60px;
  width: 100%;
  background-color: yellow;
  p {
    @include centerXY;
  }
}

#mainPageOne {
  background-color: cadetblue;
  height: 100%;
  width: 100%;
}
</style>