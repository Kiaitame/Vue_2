import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gender:'test',
    year: 2000,
    month: 1,
    day: 1,
    QA1:'',
    QA2:'',
    QA3:'',
    question:''
  },
  mutations: {
    setGender(state,val){
      state.gender = val;
    },
    setYear(state,val){
      state.year = val;
    },
    setMonth(state,val){
      state.month = val;
    },
    setDay(state,val){
      state.day = val;
    },
    setQa1(state,val){
      state.QA1 = val;
    },
    setQa2(state,val){
      state.QA2 = val;
    },
    setQa3(state,val){
      state.QA3 = val;
    },
    setQuestion(state,val){
      state.question = val;
    }
  },
  actions: {
  },
  modules: {
  }
})
