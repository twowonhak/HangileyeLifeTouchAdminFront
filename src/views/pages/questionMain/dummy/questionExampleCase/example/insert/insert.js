import {requestApi} from "../../../../../../../api/mainApi";
import warning from "../../../../../components/Alert/SweetAlert/warning";
import loginWarning from "../../../../../components/Alert/SweetAlert/loginWarning";

export function onSave(data, setIsOpen, setAlert) {
  if (data.content.length === 0) {
    warning(setAlert, "입력 하시지 않은 정보가 있습니다.")
  } else {
    requestApi("/example/insertApi",data).then((res) => {
      if (res.resultCode === "0000") {
        setIsOpen(false)
      } else {
        
        alert(res.resultMessage)
      }
    }).catch((e) => {
      console.error(e)
    })
  }
}
