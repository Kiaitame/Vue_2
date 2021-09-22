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
  getters:{
    getgender: state => state.gender,
    getyear: state => state.year,
    getmonth: state => state.month,
    getday: state => state.day,
    getQA1: state => state.QA1,
    getQA2: state => state.QA2,
    getQA3: state => state.QA3,
    getquestion: state => state.question
  },
  mutations: {
    setGender(state,gender){
      state.gender = gender;
    },
    setYear(state,year){
      state.year = year;
    },
    setMonth(state,month){
      state.month = month;
    },
    setDay(state,day){
      state.day = day;
    },
    setQa1(state,QA1){
      state.QA1 = QA1;
    },
    setQa2(state,QA2){
      state.QA2 = QA2;
    },
    setQa3(state,QA3){
      state.QA3 = QA3;
    },
    setQuestion(state,question){
      state.question = question;
    }
  },
  actions: {
  },
  modules: {
  }
})
