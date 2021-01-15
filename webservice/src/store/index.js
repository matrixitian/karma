import { createStore } from 'vuex'

export default createStore({
  state: {
    currentPage: 1,
    pageDataIsValid: false,
    nextPageRequested: false
  },
  mutations: {
    resetPageDataIsValid() {
      this.pageDataIsValid = false
    },
    setPageDataValid() {
      this.pageDataIsValid = true
    },
    requestNextPage() {
      this.nextPageRequested = true
      this.nextPageRequested = false
      this.currentPage++
    },
    requestLastPage() {
      this.lastPageRequested = true
      this.lastPageRequested = false
      this.currentPage--
    }
  },
  actions: {
  },
  modules: {
  }
})
