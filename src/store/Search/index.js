import {reqGetSearchInfo} from "@/api";

const state = {
    searchList: {}
}
const mutations = {
    GETSEARCHLIST(state, searchList) {
        state.searchList = searchList
    }
}
const getters = {
    goodsList(state) {
        return state.searchList.goodsList || []
    },
    trademarkList(state) {
        return state.searchList.trademarkList || []
    },
    attrsList(state) {
        return state.searchList.attrsList || []
    }
}
const actions = {
    async getSearchList(context, params) {
        let result = await reqGetSearchInfo(params || {})
        console.log("search数据", result)
        if (result.code === 200) {
            context.commit('GETSEARCHLIST', result.data)
        }

    }
}
export default {
    state, mutations, getters, actions
}
