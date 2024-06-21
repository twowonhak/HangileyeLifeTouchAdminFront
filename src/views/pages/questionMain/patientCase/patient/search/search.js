import {requestApi} from "../../../../../../api/mainApi";
import info from "../../../../components/Alert/SweetAlert/info";
import warning from "../../../../components/Alert/SweetAlert/warning";

export function onSearch(infoRef, data, insertAlert, onOpenFun) {
  requestApi("/case/keySelectApi", data).then((res) => {
        if (res.resultCode === "0000") {
          infoRef.current = res.data
          onOpenFun()
        } else {
          insertAlert()
        }
      }
  ).catch((e) => {
    console.error(e)
  })
}

export function onSave(infoRef, data, onOpenFun, setAlert) {
  if (data.useStrDat === '') {
    data.useStrDat = '99999999'
  }
  if (data.useEndDat === '') {
    data.useEndDat = '99999999'
  }

  let ok = true

  if (data.type === '' ||
      data.diagCd === '' ||
      data.sex === '' ||
      data.birth === '') {
    ok = false
  }

  if (ok) {
    requestApi("/patientCase/insertApi", data).then((res) => {
      if (res.resultCode === "0000") {
        infoRef.current = res.data
        onOpenFun()
      } else {
        info(setAlert, res.resultMessage)
      }
    }).catch((e) => {
      console.error(e)
    })
  } else {
    warning(setAlert, "필수 항목 체크가 필요 합니다.")
  }
}