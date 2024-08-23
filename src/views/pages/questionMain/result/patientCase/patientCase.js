import {requestApi} from "../../../../../api/mainApi";
import warning from "../../../components/Alert/SweetAlert/warning";

export function codeList(setCode, setAlert){
  let reqData = {comm : 'Y'}
  requestApi("/question/queCode/ctgListSelectApi", reqData).then((res) => {
    if (res.resultCode === "0000") {
      setCode(res.data)
    } else {
      warning(setAlert, res.resultMessage)
    }
  }).catch((e) => {
    console.error(e)
  })
}

export function onSearch(codeInfo, data, isOpenQuestionFun){
  codeInfo.current = data
  isOpenQuestionFun()
}