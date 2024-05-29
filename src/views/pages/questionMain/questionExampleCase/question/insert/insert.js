import {insertApi} from "../../../../../../api/questionExampleCaseApi";
import warning from "../../../../components/Alert/SweetAlert/warning";
import info from "../../../../components/Alert/SweetAlert/info";

export function onSave(data, setIsOpen, setAlert) {
  if (data.useStrDat === '') {
    data.useStrDat = '99999999'
  }
  if (data.useEndDat === '') {
    data.useEndDat = '99999999'
  }
  if (data.queTxt.length === 0) {
    warning(setAlert, "입력 하시지 않은 정보가 있습니다.")
  } else {
    insertApi(data).then((res) => {
      if (res.resultCode === "0000") {
        setIsOpen(false)
      } else {
        console.log(res)
        info(setAlert, res.resultMessage)
      }
    }).catch((e) => {
      console.error(e)
    })
  }
}
