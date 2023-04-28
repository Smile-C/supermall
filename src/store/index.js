import Vue from 'vue'
import Vuex from 'vuex'
import Home from "@/store/Home";
import Search from "@/store/Search";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        username: "Smile",
        password: "1234ssssssssssssssssssssss"
    },
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        Home, Search
    }
})
