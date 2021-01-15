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
          <input type="text" ref="1">
          <input type="text" ref="2">
        </div>
      </div>
      <div id="month">
        <div class="upper">
          <p>Month</p>
        </div>
        <div class="lower">
          <input type="text" ref="3">
          <input type="text" ref="4">
        </div>
      </div>
      <div id="year">
        <div class="upper">
          <p>Year</p>
        </div>
        <div class="lower">
          <input type="text" ref="5">
          <input type="text" ref="6">
          <input type="text" ref="7">
          <input type="text" ref="8">
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
  height: 60%;
  input {
    display: inline-block;
    margin-top: auto;
    margin-bottom: auto;
    margin: 5px;
    border: none;
    outline: none;
    border-bottom: 5px solid gray;
    height: 50px;
    width: 50px;
    display: inline;
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