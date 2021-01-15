<template>
<div id="Selector">
  <div id="search">
    <div id="input">
        <input type="text" placeholder="Job Titel"
        v-model="searchValue"
        @focus="showList()"
        @keyup="query()">
    </div>
    <div id="icons">
      <img id="close" src="@/assets/icons/x.svg" alt=""
      @click="clearSearch()">
      <img id="toggle" src="@/assets/icons/arrow.svg" alt=""
      :class="{listOpen: listVisible}"
      @click="toggleList()">
    </div>
  </div>
  <div id="list" v-show="listVisible">
    <ul>
        <li v-for="(jobTitle, i) in activeList" :key="i"
        @click="selectItem(jobTitle)">
          <p>{{ jobTitle }}</p>
        </li>
    </ul>
  </div>
  
    </div>
</template>

<script>
export default {
  props: ['list'],
  data() {
    return {
      listVisible: false,
      searchValue: null,
      activeList: null
    }
  },
  mounted() {
    this.activeList = this.list
  },
  methods: {
    clearSearch() {
      this.searchValue = null
      this.activeList = this.list
    },
    query() {
      const z = this
      const filtered = z.list.filter(function(tag) {
        return tag.toLowerCase().indexOf(z.searchValue.toLowerCase()) >= 0;
      })

      this.activeList = filtered
    },
    toggleList() {
      this.listVisible = !this.listVisible
    },
    showList() {
      this.listVisible = true
    },
    hideList() {
      this.listVisible = false
    },
    selectItem(item) {
      this.searchValue = item

      this.hideList()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/mixins/centerY';

#search {
  position: relative;
  #icons {
    position: absolute;
    top: 7px;
    margin-right: 10px;
    right: 0;
    img {
      margin-right: 7px;
      padding: 3px;
      border-radius: 5px;
      cursor: pointer;
      &:hover {
        transition: 0.2s ease;
        transform: scale(1.1);
      }
    }
    #close {
      background-color: rgba(200, 0, 0, 0.4);
    }
    #toggle {
      transform: rotate(-90deg);
      background-color: rgba(0, 0, 200, 0.4);
    }
  }
}

.listOpen {
  transition: .2s ease;
  transform: rotate(90deg) !important;
}

#Selector {
  width: 300px;
}

img {
  height: 15px;
  width: 15px;
  fill: rgba(0, 0, 0, 0.5);
}

input {
  width: calc(100% - 5px);
  margin: 0;
  height: 30px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  outline: none;
  text-align: center;
  font-size: 17px;
}

ul {
  margin: auto;
  margin: 0;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 0;
  max-height: 500px;
  overflow-y: auto !important;
  li {
    padding: 0;
    width: 100%;
    height: 32px;
    position: relative;
    cursor: pointer;
    &:hover {
      transition: .2s ease;
      background-color: rgb(100, 159, 226);
    }
    p {
      @include centerY;
      position: absolute;
      font-weight: bold;
      margin-left: 20px;
    }
  }
}

</style>