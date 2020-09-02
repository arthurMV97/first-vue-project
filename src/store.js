import Vuex from "vuex";
import Vue from 'vue'


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        list: []
    },
    mutations: {
        changeData(state, list) {
            state.list = list
        },
        pushData(state, task) {
            state.list.push(task)
        },
        updateStatus(state, id) {
           let index = state.list.findIndex(e => e.id === id)
           state.list[index].todo = !state.list[index].todo
        },
        deleteElement(state, id) {
            state.list.splice(id, 1)
        }
    },
   
    actions: {
        getDataFromApp(context, list) {
            context.commit("changeData", list)
        },
        postDataFromAddForm(context, task) {
            context.commit("pushData", task)
        },
        updateData(context, id) {
            context.commit("updateStatus", id)
        },
        deleteData(context, id) {
            context.commit("deleteElement", id)

        }
    },
    getters: {
        
        allTask: (state) => (toDisplay) => {

            if (toDisplay === "all") {
                return state.list
              }
              else if (toDisplay === "done") {
               return  state.list.filter(e => e.todo === false)
              } 
              else {
                return state.list.filter(e => e.todo === true)
        
              }
            }
        }
})