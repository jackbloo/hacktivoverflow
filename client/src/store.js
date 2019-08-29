import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    questions: [],
    myQ: [],
    oneQ: {
      UserId: {},
      upvote: [],
      downvote: [],
      answer: [],
      tags: []
    },
    myT: [],
    sameTags:[],
    top10: []
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
    },
    GETMYTAGS(state,payload){
      state.myT = payload
    },
    GETSAMETAGS(state,payload){
      state.sameTags = payload
    },
    GETTOP10(state,payload){
      state.top10 = payload
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
      let questionId = payload.questionId
      let id = payload.id
      let token = localStorage.getItem('access_token')
      axios({
        method: 'PATCH',
        url: `http://localhost:3000/answer/upvote/${id}`,
        headers: {
          token
        }
      }).then(({
        data
      }) => {

        context.dispatch('getOneQuestion', questionId)
      }).catch(err => {
        console.log(err)
      })
    },
    answerDown(context, payload) {
      let questionId = payload.questionId
      let id = payload.id
      let token = localStorage.getItem('access_token')
      axios({
        method: 'PATCH',
        url: `http://localhost:3000/answer/downvote/${id}`,
        headers: {
          token
        }
      }).then(({
        data
      }) => {
        context.dispatch('getOneQuestion', questionId)
      }).catch(err => {
        console.log(err)
      })
    },
    getMyTags({commit}){
      let token = localStorage.getItem('access_token')
      axios({
        method:'GET',
        url:'http://localhost:3000/user/myTags',
        headers: {
          token
        }
      }).then(({data})=>{
        commit('GETMYTAGS', data.tags)
      })
    },
    toTag({commit}, payload){
      let token = localStorage.getItem('access_token')
      let tags = payload
      axios({
        method:'GET',
        url:`http://localhost:3000/question/tags/${tags}`,
        headers: {
          token
        }
      }).then(({data})=>{
        commit('GETSAMETAGS',data.filtered)
      })
    },
    getTop10({commit}){
      let token = localStorage.getItem('access_token')
      axios({
        method:'GET',
        url:'http://localhost:3000/vote/topTen',
        headers: {
          token
        }
      }).then(({data})=> {
        commit('GETTOP10', data.top10)
      })
    }
  },
});
