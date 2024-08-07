import warning from "../../../../../components/Alert/SweetAlert/warning";
import info from "../../../../../components/Alert/SweetAlert/info";
import {requestApi} from "../../../../../../../api/mainApi";
import loginWarning from "../../../../../components/Alert/SweetAlert/loginWarning";

export function onSave(data, setIsOpen, setAlert) {

  if (data.useStrDat === '') {
    data.useStrDat = '00000000'
  }
  if (data.useEndDat === '') {
    data.useEndDat = '99999999'
  }
  if (data.content.length === 0) {
    warning(setAlert, "입력 하시지 않은 정보가 있습니다.")
  } else {
    requestApi("/question/insertApi",data).then((res) => {
      if (res.resultCode === "0000") {
        setIsOpen(false)
      } else {
        
        info(setAlert, res.resultMessage)
      }
    }).catch((e) => {
      console.error(e)
    })
  }
}
