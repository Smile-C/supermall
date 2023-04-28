import Mock from 'mockjs'

//webpack 默认对面暴露的数据有：图片、JSON数据格式  ，不用export
import banner from './banner.json'
import floor from './floor.json'


//mock数据

/**
 * 第一个参数：请求参数的请求地址
 * 第二个参数：请求数据
 */
Mock.mock("/mock/banner", {code: 200, data: banner})
Mock.mock("/mock/floor", {code: 200, data: floor})
