import {requestApi} from "../../../../../api/mainApi";

export function listSelect(setDataList) {
  requestApi("/stock/asset/listSelectApi").then((res) => {
    if (res.resultCode === "0000") {
      setDataList(res.data)
    } else {
    }
  }).catch((e) => {
    console.error(e)
  })
}