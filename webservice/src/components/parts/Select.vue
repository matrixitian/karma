<template>
<div id="Selector" :class="{width200: width === 200}">
  <div id="search">
    <div id="input">
        <input type="text" :placeholder="defaultPlaceholder"
        v-model="searchValue"
        @focus="showList()"
        @keyup="query()"
        ref="searchBar"
        :readonly="readOnly"
        :class="{pointer: readOnly}">
    </div>
    <div id="icons">
      <img id="close" src="@/assets/icons/x.svg" alt=""
      @click="clearSearch()"
      v-show="showClearBtn()">
      <img id="toggle" src="@/assets/icons/arrow.svg" alt=""
      :class="{listOpen: listVisible}"
      @click="toggleList()">
    </div>
  </div>
  <div id="list" v-show="listVisible">
    <ul :class="{width200: width === 200}">
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
  props: ['list', 'onlySelect', 'width', 'readOnly', 'defaultIndex',
  'defaultPlaceholder'],
  data() {
    return {
      listVisible: false,
      searchValue: null,
      activeList: null
    }
  },
  mounted() {
    this.activeList = this.list

    if (this.onlySelect) {
      if (this.defaultIndex) {
        this.searchValue = this.list[this.defaultIndex]
      } else {
        this.searchValue = this.list[0]
      }
    }
  },
  methods: {
    showClearBtn() {
      if (this.searchValue && !this.onlySelect) {
        if (this.searchValue.length > 0) return true
      }

      return false
    },
    clearSearch() {
      this.searchValue = null
      this.activeList = this.list

      this.$refs.searchBar.focus()
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

.pointer {
  cursor: pointer !important;
}

.width200 {
  width: 200px !important;
}

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
      transform: rotate(90deg);
      background-color: rgba(0, 0, 200, 0.4);
    }
  }
}

.listOpen {
  transition: .2s ease;
  transform: rotate(-90deg) !important;
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
  position: absolute;
  width: 100%;
  margin: auto;
  margin: 0;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 0;
  max-height: 300px;
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