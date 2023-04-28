import axios from "axios";
import nProgress from "nprogress"
import "nprogress/nprogress.css"

const requests = axios.create({
    baseURL: '/mock',
    timeout: 5000
})

requests.interceptors.request.use((config) => {
    nProgress.start()//start()进度条开始
    //包含headers
    return config
})
requests.interceptors.response.use((res) => {
    nProgress.done()    //done()进度条结束，进度条颜色是可以修改的，修改那个css文件   .bar
    return res.data
}, (err) => {

    return new Promise.reject(new Error('fail'))
})

export default requests
