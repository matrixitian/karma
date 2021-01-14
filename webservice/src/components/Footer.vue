<template>
  <div>
    <div id="centerer">
      <div id="last">
        <button @submit.prevent>Back</button>
      </div>
      <div id="dots">
        <ul>
          <li v-for="num in 6" :key="num"></li>
        </ul>
      </div>
      <div id="next">
        <button @submit.prevent>Next</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">

#centerer {
  position: relative;
  margin: auto;
  height: 100%;
  width: 400px;
  background-color: yellow;
}

button {
  // position: absolute;
  margin: auto;
}

#last, #next {
  position: absolute;
  width: 25%;
  height: 100%;
  background-color: hotpink;
}

#last {
  left: 0;
}

#next {
  right: 0;
}

ul {
  position: absolute;
  background-color: red;
  margin: 0;
  padding: 0;
  left: 50%; top: 50%;
  transform: translate(-50%, -50%);
  li {
    margin-left: 5px;
    float: left;
    height: 15px;
    width: 15px;
    border-radius: 100%;
    background-color: greenyellow;
  }
}
</style>