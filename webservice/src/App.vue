<template>
  <router-view/>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Quicksand');

html, body {
  margin: 0px !important;
  padding: 0px !important;
  overflow: hidden !important;
}

ul {
  li {
    list-style: none;
  }
}

button {
  cursor: pointer;
}

input, button {
  font-family: 'Quicksand';
  font-weight: bold;
}

p {
  font-family: 'Quicksand';
  margin: 0;
  padding: 0;
}

.enter { transform: translateX(100%) }
.enter-to { transform: translateX(0) }
.slide-enter-active { position: absolute }

.leave { transform: translateX(0) }
.leave-to { transform: translateX(-100%) }

.slide-enter-active,
.slide-leave-active { transition: all 750ms ease-in-out }
</style>
