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
}

button {
  font-family: 'Quicksand';
  position: absolute;
  left: 50%; top: 50%;
  transform: translate(-50%, -50%);
  border: 3px solid white;
  border-radius: 10px;
  background-color: transparent;
  color: white;
  font-size: 15px;
  padding: 7px 20px 7px 20px;
  &:hover {
    transition: .2s ease;
    padding: 8px 21px 8px 21px;
    background-color: rgba(255, 255, 255, 0.3);
    color: black;
  }
}

#last, #next {
  position: absolute;
  width: 25%;
  height: 100%;
}

#last {
  left: 0;
}

#next {
  right: 0;
}

ul {
  position: absolute;
  margin: 0;
  padding: 0;
  left: 50%; top: 50%;
  transform: translate(-50%, -50%);
  li {
    border: 1px solid rgba(0, 0, 0, 0.2);
    margin-left: 5px;
    float: left;
    height: 17px;
    width: 17px;
    border-radius: 100%;
    background-color: rgba(0, 0, 0, 0.2);
  }
  li:nth-child(1) {
    border-color: white;
    background-color: rgba(255, 255, 255, 0.9);
  }
}
</style>