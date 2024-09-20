import axios from 'axios';
import {browserName, deviceType, osName} from "react-device-detect";


export const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_API_KEY}`
  // baseURL: 'http://localhost:8084/api'
  // baseURL: 'http://192.168.1.21:8084/api'
  , headers: {
    "Content-Type": "application/json; charset=utf-8",
  }, timeout: 10000,
});

const axiosUtil = Object.freeze({
  get: (url, param) => {
    return axiosInstance
        .get(url,
            {params: param, withCredentials: true})
        .then((res) => {
          // console.debug(res);
          if (res.data) return res.data;
        })
        .catch((error) => {
          console.error(error)
        });
  },

  post: (url, param = {}) => {
    console.log('* url ===> ', url)
    console.log('* param ===> ', param)
    // param.diviceTy = deviceType
    // param.osNm = osName
    // param.browserNm = browserName
    return axiosInstance
        .post(url,
            param,
            {withCredentials: true})
        .then((res) => {
          // console.debug(res);
          if (res.data)
            return res.data;
        })
        .catch((error) => {
          console.error(error)
        })
  },

  formSubmit: (url, formData) => {
    return axiosInstance
        .post(url,
            formData,
            {
              headers: {"Content-Type": "multipart/form-data",}, withCredentials: true
            })
        .then((res) => {
          // console.debug(res);
          if (res.data)
            return res.data;
        })
        .catch((error) => {
          console.error(error)
        })
  },

  excelDownload: (url, param) => {
    return axiosInstance
        .post(url, param, {
          // params: param,
          withCredentials: true,
          responseType: "blob"
        }).then(res => {
          const url = window.URL.createObjectURL(
              new Blob([res.data], {type: res.headers['content-type']})
          );
          const link = document.createElement("a");
          const filename = decodeURIComponent(res.headers['content-disposition'])
          if (filename !== "undefined") {
            link.href = url;
            link.setAttribute(
                "download",
                filename
            );
            document.body.appendChild(link);
            link.click();
          } else {
            return null
          }
        })
  }
});

export default axiosUtil;