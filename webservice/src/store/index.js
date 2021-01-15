import { createStore } from 'vuex'

export default createStore({
  state: {
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
    }
  },
  actions: {
  },
  modules: {
  }
})
