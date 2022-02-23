import axios, {AxiosRequestConfig} from 'axios';
import Tips from 'react-native-root-toast-tips';
import {store} from '../store';
import {API_URL} from '../config';

const reqOpts: AxiosRequestConfig = {
  baseURL: API_URL,
  timeout: 1000000,
  maxContentLength: 1000000,
};
const instance = axios.create(reqOpts);

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    const {quiet = false, url} = config;
    const {account} = store.getState();
    console.log('-------请求拦截器');
    console.log(store.getState());
    const {token} = account;
    if (!quiet) {
      Tips.show('loading...', {
        mask: false,
        showLoading: true,
        maskColor: 'gray',
      });
    }
    const headers = {
      ...config.headers,
      token,
    };
    return {...config, headers};
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  },
);

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    const {data: res, status} = response;
    const {code, data, msg} = res;
    console.log('-----res----');
    console.log(data);
    switch (code) {
      case 1000:
        return data;
      // other businesss code process logic here,
      // for example, in a project, code `4507` means token is not valid,
      // there would be a jump logic to deal with.
      case 2002:
        // token is out of date or not valid
        // 登录令牌失效，重置本地存储
        // Toast.fail(msg);
        store.dispatch({type: 'account/reset'});
        return Promise.reject(data);
      // 任务发生变化
      case 6543:
      case 8923:
        // Toast.info(msg, 1.5);
        store.dispatch({type: 'taskCommon/removeTask'});
        return Promise.reject({...res});
      default:
        // Toast.info(msg, 1.5);
        return Promise.reject({data, msg});
    }
  },
  function (error) {
    // 对响应错误做点什么
    if (`${error}`.includes('timeout')) {
      console.log('请求超时');
      // Toast.info('请求超时！', 1.5);
    } else if (error?.message === 'Network Error') {
      console.log('当前网络不可以用！');
      // Toast.info('当前网络不可以用！', 1.5);
    } else {
      console.log('服务器响应失败！');
      // Toast.info('服务器响应失败!', 0.5);
    }
    return Promise.reject(error);
  },
);

export default instance;
