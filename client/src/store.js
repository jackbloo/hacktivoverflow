import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    questions: [],
    myQ: [],
    oneQ: {}
  },
  mutations: {
    GETQUESTIONS(state, payload) {
      state.questions = payload
    },
    GETMYQUESTIONS(state, payload) {
      state.myQ = payload
    },
    GETONEQ(state, payload) {
      state.oneQ = payload
    }
  },
  actions: {
    getQuestions(context, payload) {
      let token = localStorage.getItem('access_token')
      axios({
        method: 'GET',
        url: 'http://localhost:3000/question',
        headers: {
          token
        }
      }).then(({
        data
      }) => {
        let q = data.data
        context.commit('GETQUESTIONS', q)
      })
    },
    getMyQuestions(context, payload) {
      let token = localStorage.getItem('access_token')
      axios({
        method: 'GET',
        url: 'http://localhost:3000/question/mine',
        headers: {
          token
        }
      }).then(({
        data
      }) => {
        let qq = data.data
        context.commit('GETMYQUESTIONS', qq)
      })
    },
    getOneQuestion(context, payload) {
      let id = payload
      let token = localStorage.getItem('access_token')
      axios({
        method: 'GET',
        url: `http://localhost:3000/question/mine/${id}`,
        headers: {
          token
        }
      }).then(({
        data
      }) => {
        let oneq = data
        context.commit('GETONEQ', oneq)
      }).catch(err => {
        console.log(err)
      })
    },
    upvoteQ(context, payload) {
      let id = payload
      let token = localStorage.getItem('access_token')
      axios({
        method: 'PATCH',
        url: `http://localhost:3000/question/upvote/${id}`,
        headers: {
          token
        }
      }).then(({
        data
      }) => {
        context.dispatch('getOneQuestion', id)
      }).catch(err => {
        console.log(err)
      })
    },
    downvoteQ(context, payload) {
      let id = payload
      let token = localStorage.getItem('access_token')
      axios({
        method: 'PATCH',
        url: `http://localhost:3000/question/downvote/${id}`,
        headers: {
          token
        }
      }).then(({
        data
      }) => {
        context.dispatch('getOneQuestion', id)
      }).catch(err => {
        console.log(err)
      })
    },
    answerUp(context, payload) {
      
    },
    answerDown(context, payload) {

    }
  },
});
