import {requestApi} from "../../../../../../api/mainApi"
import warning from "../../../../components/Alert/SweetAlert/warning";
import success from "../../../../components/Alert/SweetAlert/success";

export function detail(key, setData, setAlert) {
  requestApi("/patientCase/detailSelectApi", key).then((res) => {
    if (res.resultCode === "0000") {
      setData(res.data)
    } else {
      warning(setAlert, res.resultMessage)
    }
  }).catch((e) => {
    console.error(e)
  })
}

export function onDelete(data, setIsOpenMainFun, setAlert) {
  const infoData = {key: data.current.key}
  requestApi("/patientCase/deleteApi",infoData).then((res) => {
    if (res.resultCode === "0000") {
      success(setAlert, "삭제 완료 되었습니다.", setIsOpenMainFun)
    } else {
      warning(setAlert, res.resultMessage)
    }
  }).catch((e) => {
    console.error(e)
  })
}

export function onUpdate(data, setAlert, setIsNotificationAlertOpen) {
  requestApi("/patientCase/updateApi", data).then((res) => {
    if (res.resultCode === "0000") {
      setIsNotificationAlertOpen(null)
      success(setAlert, "성공 하였습니다.")
    } else {
      warning(setAlert, res.resultMessage)
    }
  }).catch((e) => {
    console.error(e)
  })


}