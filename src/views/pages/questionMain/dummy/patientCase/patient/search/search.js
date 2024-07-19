import {requestApi} from "../../../../../../../api/mainApi";
import info from "../../../../../components/Alert/SweetAlert/info";
import warning from "../../../../../components/Alert/SweetAlert/warning";

export function onSearch(infoRef, data, insertAlert, onOpenFun, setAlert) {
  requestApi("/case/keySelectApi", data).then((res) => {
        if (res.resultCode === "0000") {
          infoRef.current = res.data
          onOpenFun()
        } else {
          let ok = true

          if (data.type === '' ||
              data.diagCd === '' ||
              data.sex === '' ||
              data.birth === '') {
            ok = false
          }

          if (ok) {
          insertAlert()
          } else {
            warning(setAlert, "필수 항목 체크가 필요 합니다.")
          }
        }
      }
  ).catch((e) => {
    console.error(e)
  })
}

export function onSave(infoRef, data, onOpenFun, setAlert) {
  if (data.useStrDat === '') {
    data.useStrDat = '00000000'
  }
  if (data.useEndDat === '') {
    data.useEndDat = '99999999'
  }


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

}