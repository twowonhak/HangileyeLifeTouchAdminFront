import customAxios from "../lib/customAxios";

/*
    *  목록 : listSelectApi
    *  상세 : detailSelectApi
    *  등록 : insertApi
    *  수정 : updateApi
    *  삭제 : deleteApi
* */


export const requestApi = async (url, infoData) => {
  return await customAxios.post(url, infoData)
}