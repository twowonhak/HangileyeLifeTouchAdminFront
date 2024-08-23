import {requestApi} from "../../../../api/mainApi";

export function listSelect(setStock){
  requestApi("/stock/stats/listSelectApi").then((res) => {
    if (res.resultCode === "0000") {
      setStock(res.data)
    } else {
      // alert(res.resultMessage)
    }
  }).catch((e) => {
    console.error(e)
  })
}