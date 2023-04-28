//这个index  模块统一管理
import requests from "@/api/request";
import mockRequest from "@/api/mockRequest";

/**
 * 首页三级分类
 * @returns {*}
 */
export const reqCategoryList = () => requests({
    url: '/product/getBaseCategoryList',
    method: 'get'
})
/**
 * 获取mock的轮播图图片数据
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export const reqBannerList = () => mockRequest.get('/banner')

/**
 * 获取mock底部列表数据
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export const reqFloorList = () => mockRequest.get('/floor')


export const reqGetSearchInfo = (params) => requests({
    url: '/list',
    method: "post",
    data: params
})
