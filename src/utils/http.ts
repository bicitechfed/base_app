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
    return data;
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  },
);

export default instance;
