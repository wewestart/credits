import axios from 'axios'
import qs from 'qs'
import store from '@/store/index'
let url = 'localhost:8080' 
const baseURL = process.env.NODE_ENV === 'production' ? `${document.location.protocol}//${window.location.host}` : `https://${url}/`
console.log(baseURL)
// 创建axios实例
const $ = axios.create({
  // baseURL: '/localhost',
  baseURL: baseURL,
  defaults: {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    withCredentials: true
  }
})

// 请求拦截器
$.interceptors.request.use(config => {
  // loading
  return config
}, error => {
  return Promise.reject(error)
})
// 响应拦截器
$.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.resolve(error.response)
})

// 添加统一的请求参数
function returnParams(params = {}) {
  // for (let para in store.getters.defaultParam){
  //   params[para] = store.getters.defaultParam[para]
  // }
  params.frontFrom = 1
  params.jsoncallback = true
  return params
}
export default {
  get(url, params, config = { showLoading: true }) {
    params = returnParams(params)
    return $.get(url, params, config).then(
      (response) => {
        return response
      }
    ).catch(
      (error) => {
        return error
      }
    )
  },
  post(url, params, config = { showLoading: true }) {
    params = returnParams(params)
    if (!config.headers) {
      params = qs.stringify(params)
    }
    return $.post(url, params, config).then(
      (response) => {
        return response
      }
    ).catch(
      (error) => {
        console.log(error)
        return error
      }
    )
  },
  all(arrFn) {
    if (arrFn.lenght <= 0) {
      return
    }
    const len = arrFn.length
    for (let i = 0; i < len; i++) {
      if (!(arrFn[i] instanceof Function)) {
        return
      }
    }
    return axios.all(arrFn).then(
      (results) => {
        // let temp = results.map(r => r.data)
        return results
      }
      // axios.spread(() => {
      //   // Both request are now complete
      //   // return arguments[0]
      //   for (let index = 0; index < arguments[0].length; index++) {
      //     const arg = arguments[0][index]
      //     arg().then(
      //       (response) => {
      //         return response
      //       }
      //     )
      //   }
      // })
    )
  }
}
