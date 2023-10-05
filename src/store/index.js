import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        
    },
    state: {
        chats:[]
    },
    mutations: {
        setChats(state, payload) {
            state.chats.push(payload)
        }
    },
    actions: {
        SendChat(context, payload) {
            return new Promise((res) => {
                context.commit('setChats', payload)
                localStorage.setItem('chat', context.state.chats)
                res(payload)
            })
        }
    },
    getters: {
        getChats(state){
            return state.chats
        }
    }
  })