import axios from "axios";

// initial state
const state = () => ({
    USER: {},
    USER_LIST: [],
})

const actions = {

    async getAll({ commit }) {
        axios.get("http://localhost:3000/users")
            .then(response => {
                commit("GET_ALL", response.data);
            })
            .catch(error => {
                console.log(error)
            })
    },
    async post({ commit }, item) {
        axios.post("http://localhost:3000/users", item)
            .then(response => {
                commit("POST", item);
                alert("user: " + item.username + " başarılı bir şekilde eklendi")
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }
}

const mutations = {
    ["GET_ALL"]: (state, items) => {
        state.USER_LIST = items;
    },
    ["POST"]: (state, item) => {
        state.USER_LIST.push(item);
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}