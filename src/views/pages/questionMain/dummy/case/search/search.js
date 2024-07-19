import {requestApi} from "../../../../../../api/mainApi";
import warning from "../../../../components/Alert/SweetAlert/warning";

export function onSearch(info, data, onOpenFun, setAlert) {
  requestApi("/case/keySelectApi", data).then((res) => {
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

export function caseDataList(info, setDataList, setAlert){
  requestApi("/case/listSelectApi").then((res) => {
    if (res.resultCode === "0000") {
      setDataList(res.data)
    } else {
      warning(setAlert, res.resultMessage)
    }
  }).catch((e) => {
    console.error(e)
  })
}