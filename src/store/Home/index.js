import {reqCategoryList, reqBannerList, reqFloorList} from "@/api";

const state = {
    categorylist: [],
    bannerList: [],
    FloorList: []
}
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categorylist = categoryList
    },
    BANNERLIST(state, bannerList) {
        state.bannerList = bannerList
    },
    GETFLOORLIST(state, floorList) {
        state.FloorList = floorList
    }
}
const getters = {}
const actions = {
    async categoryList(context) {
        let result = await reqCategoryList()
        console.log("三级联动:", result)
        if (result.code === 200) {
            context.commit('CATEGORYLIST', result.data)
        }
    },
    async getBannerList(context) {
        let result = await reqBannerList()
        console.log("首页轮播图:", result)
        if (result.code === 200) {
            context.commit('BANNERLIST', result.data)
        }
    },
    async getFloorList(context) {
        let result = await reqFloorList()
        console.log("floor数据:", result)
        if (result.code === 200) {
            context.commit('GETFLOORLIST', result.data)
        }
    }

}
export default {
    state, mutations, getters, actions
}
