import {requestApi, requestExcelDownloadApi} from "../../../../api/mainApi";

export function listSelect(data, setStock){
  requestApi("/stock/state/listSelectApi",data).then((res) => {
    if (res.resultCode === "0000") {
      console.log(res.data)
      setStock(res.data)
    } else {
      // alert(res.resultMessage)
    }
  }).catch((e) => {
    console.error(e)
  })
}

export function excelExport(data) {
  requestExcelDownloadApi("/stock/state/excelExportApi",data).then((res) => {
    if (res === null) {
    }
  }).catch((e) => {
    console.error(e)
  })
}