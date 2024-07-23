import {requestApi} from "../../../../../api/mainApi";
import warning from "../../../components/Alert/SweetAlert/warning";

export function codeList(setCode, setAlert){
  requestApi("/question/question/codeListSelectApi").then((res) => {
    if (res.resultCode === "0000") {
      setCode(res.data)
    } else {
      warning(setAlert, res.resultMessage)
    }
  }).catch((e) => {
    console.error(e)
  })
}

export function codeDetail(midValue, codeInfo, isOpenDetailListFun){
  codeInfo.current = midValue
  isOpenDetailListFun()
}