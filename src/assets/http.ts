import axios from 'axios'
import { typeStr } from './tool'

interface IRequestConfig {
    method?: string
    url: string
    // `headers` are custom headers to be sent
    headers?: object
    opt?: {
        auth: boolean           // 401是否强校验，强校验则在接口401是自动跳转至登陆页
        toast: boolean          // 接口异常时是否进行toast提示
    } 
    params?: object   // 请求传参，无论get还是post，统一为对象方式传
}

interface IServerRes {
    status: number 
    data: object 
    statusText: string
}

interface IBusinessRes {
    code: number 
    data: object 
    message: string
}

enum StatusCode {
    AuthCode = 401,
    SuccessCode = 200,
}

class Http {

    private http: object

    constructor(http: object | Function) {
        this.http = http
    }

    /**
     * 1. 统一发送请求接口，需要对异常码401与其他进行特殊处理
     * 2. 401链接跳转
     * 3. 错误码情况下message提示
     * @param option 
     * @param method 
     */
    ajax(option: IRequestConfig, method = 'get') {
        let http: any = {}
        let res: Promise<object> = null
        // 为opt参数添加默认值
        option.opt = Object.assign({ auth: true, toast: true }, option.opt)
        // token值
        option.headers = {
            'Content-Type': 'application/json',
        }

        // 兼容axios即可做函数又可做对象的两种用法
        if (typeStr(this.http) === 'Function') {
            http = this.http as Function
            res = http(option)
        } else {
            http = this.http as any
            res = http[method](option)
        }

        return res
          .then((resData: IServerRes) => {
              const { status, data, statusText } = resData
              if (status === StatusCode.SuccessCode && statusText === 'OK') {
                return data
              } else {
                Promise.reject(data)
              }
          })
          .then((data: IBusinessRes) => {
            return this.auth(option.opt, data)
          })
          .then((data: IBusinessRes) => {
            return this.toast(option.opt, data)
          })
          .then((data: IBusinessRes) => data)
          .catch((data: IBusinessRes) => {
              // 集中提示错误信息message
              console.error('error----------error', data)
              return data
          })
    }

    auth(opt, data) {
        if (data.code === StatusCode.AuthCode && opt.auth) {
            // 跳转逻辑
        } 
        return data
    }

    toast(opt, data) {
        if (data.code !== StatusCode.AuthCode && opt.toast) {
            // toast提示
            return Promise.reject(data)
        } 
        return Promise.resolve(data)
    }

}

export default new Http(axios)