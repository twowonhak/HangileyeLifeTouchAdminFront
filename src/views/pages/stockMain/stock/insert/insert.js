import {requestApi} from "../../../../../api/mainApi";
import warning from "../../../components/Alert/SweetAlert/warning";

export function assOpList(setAssData) {
  requestApi("/stock/asset/listSelectApi").then((res) => {
    if (res.resultCode === "0000") {
      setAssData(res.data)
    } else {
    }
  }).catch((e) => {
    console.error(e)
  })
}

export function cdKeyList(setCdData) {
  requestApi("/stock/stock/cdListSelectApi").then((res) => {
    if (res.resultCode === "0000") {
      setCdData(res.data)
    } else {
    }
  }).catch((e) => {
    console.error(e)
  })
}

export function onSave(data, onOpenFun, setAlert, info) {
  requestApi("/stock/stock/insertApi", data).then((res) => {
    if (res.resultCode === "0000") {
      info.current = res.data
      onOpenFun()
    } else {
      warning(setAlert, res.resultMessage)
    }
  }).catch((e) => {
    console.error(e)
  })
}