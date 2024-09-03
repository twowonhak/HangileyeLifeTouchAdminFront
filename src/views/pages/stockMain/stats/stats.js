import {requestApi} from "../../../../api/mainApi";

export function listSelect(setStock, setLicense){
  requestApi("/stock/stats/listSelectApi").then((res) => {
    if (res.resultCode === "0000") {
      setStock(res.data.stock)
      setLicense(res.data.license)
    } else {
      // alert(res.resultMessage)
    }
  }).catch((e) => {
    console.error(e)
  })
}