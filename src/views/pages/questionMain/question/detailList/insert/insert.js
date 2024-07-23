import {requestApi} from "../../../../../../api/mainApi";
import warning from "../../../../components/Alert/SweetAlert/warning";

export function onSave(data, setAlert, isOpenListFun) {


  if (data.useStrDat === '' || data.useStrDat === undefined) {
    data.useStrDat = '00000000'
  }
  if (data.useEndDat === '' || data.useEndDat === undefined) {
    data.useEndDat = '99999999'
  }

  let ok = true
  if (data.queTxt === '' || data.queTxt === undefined) {
    ok = false
  }

  if (ok) {
    requestApi("/question/question/insertApi", data).then((res) => {
      if (res.resultCode === "0000") {
        isOpenListFun()
      } else {
        warning(setAlert, res.resultMessage)
      }
    }).catch((e) => {
      console.error(e)
    })
  } else {
    warning(setAlert, "질문 내용은 필수 입니다.")
  }
}