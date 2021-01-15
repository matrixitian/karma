<template>
  <div id="mainPageOne">
    <div id="sentence">
      <p>Testing test sentence.</p>
    </div>

    <div id="birthday">
      <div id="day">
        <div class="upper">
          <p>Day</p>
        </div>
        <div class="lower">
          <input type="number" ref="1" placeholder="D"
          @keyup="nextField(2)">
          <input type="number" ref="2" placeholder="D">
        </div>
      </div>
      <div id="month">
        <div class="upper">
          <p>Month</p>
        </div>
        <div class="lower">
          <input type="number" ref="3" placeholder="M">
          <input type="number" ref="4" placeholder="M">
        </div>
      </div>
      <div id="year">
        <div class="upper">
          <p>Year</p>
        </div>
        <div class="lower">
          <input type="number" ref="5" placeholder="Y">
          <input type="number" ref="6" placeholder="Y">
          <input type="number" ref="7" placeholder="Y">
          <input type="number" ref="8" placeholder="Y">
        </div>
      </div>
    </div>

    <div id="identification">
      <div id="id_sentence">identify</div>
      <div id="gender"></div>
      <div id="gender_orientation"></div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$refs[1].focus()
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/mixins/centerXY';

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
  height: 40%;
  width: 100%;
  background-color: rgb(50, 50, 110);
  p {
    @include centerXY;
    color: white;
    font-weight: bold;
    font-size: 25px;
  }
}

.lower {
  position: relative;
  height: 60%;
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
  input {
    margin: 5px;
    border: none;
    outline: none;
    border-bottom: 5px solid gray;
    height: 50px;
    width: 50px;
    display: inline;
    text-align: center;
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