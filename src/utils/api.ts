import axios from "axios";
import Cookies from "js-cookie";
import { transData } from "./util";

// axios 配置
axios.defaults.timeout = 6000;
axios.defaults.baseURL = process.env.VUE_APP_SERVER_URL;

// 返回状态判断
axios.interceptors.response.use(
  res => {
    if (res.data.code === 403) {
      Cookies.remove("accessToken");
      // router.push({
      //   name: "login"
      // });
    }

    if (res.status === 200) {
      if (res.headers.authorization) {
        Cookies.set("accessToken", res.headers.authorization);
      }

      // 对返回值进行数据处理
      res.data = transData(res.data);
      return res;
    }

    return Promise.reject(res);
  },
  error => {
    if (
      error.response &&
      (error.response.status === 401 || error.response.status === 403)
    ) {
      Cookies.remove("accessToken");
      // router.push({
      //   name: "login"
      // });
    }
    return Promise.reject(error);
  }
);

export function post(url: string, params: any, config?: object) {
  let token: string | undefined = Cookies.get("accessToken");
  let headers: object = {};
  if (token) {
    headers = Object.assign(headers, { Authorization: token });
  }

  if (config) {
    headers = Object.assign(headers, config);
  }

  return new Promise((resolve, reject) => {
    axios
      .post(url, params, {
        headers: headers,
        timeout: 600000
      })
      .then(res => {
        resolve(res.data);
      })
      .catch(error => {
        reject(error);
      });
  });
}

export function get(url: string, params?: any) {
  let token: string | undefined = Cookies.get("accessToken");
  let headers: object = {};
  if (token) {
    headers = Object.assign(headers, { Authorization: token });
  }

  if (params) {
    params = Object.assign(params, { _t: new Date().getTime() });
  } else {
    params = { _t: new Date().getTime() };
  }

  return new Promise((resolve, reject) => {
    axios
      .get(url, { params: params, headers: headers })
      .then(res => {
        resolve(res.data);
      })
      .catch(error => {
        reject(error);
      });
  });
}

export function upload(url: string, formData: any) {
  let token: string | undefined = Cookies.get("accessToken");
  let headers: object = { "Content-Type": "multipart/form-data" };
  if (token) {
    headers = Object.assign(headers, { Authorization: token });
  }

  return new Promise((resolve, reject) => {
    axios
      .post(url, formData, {
        headers: headers,
        timeout: 120000
      })
      .then(res => {
        resolve(res.data);
      })
      .catch(error => {
        reject(error);
      });
  });
}
