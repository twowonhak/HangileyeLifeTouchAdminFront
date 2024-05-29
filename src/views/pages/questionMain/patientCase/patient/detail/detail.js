import {deleteApi, detailSelectApi, updateApi} from "../../../../../../api/patientCaseApi";
import warning from "../../../../components/Alert/SweetAlert/warning";
import success from "../../../../components/Alert/SweetAlert/success";

export function detail(key, setData) {
  detailSelectApi(key).then((res) => {
    if (res.resultCode === "0000") {
      setData(res.data)
    } else {
      console.log(res)
      alert(res.resultMessage)
    }
  }).catch((e) => {
    console.error(e)
  })
}

export function onDelete(data, setIsOpenMainFun, setIsAlertOpen) {
  const infoData = {key: data.current.key}
  deleteApi(infoData).then((res) => {
    if (res.resultCode === "0000") {
      success(setIsAlertOpen, "삭제 완료 되었습니다.", setIsOpenMainFun)
    } else {
      console.log(res)
      warning(setIsAlertOpen, res.resultMessage)
    }
  }).catch((e) => {
    console.error(e)
  })
}

export function onUpdate(data, setIsAlertOpen, setIsNotificationAlertOpen) {
  updateApi(data).then((res) => {
    if (res.resultCode === "0000") {
      setIsNotificationAlertOpen(null)
      success(setIsAlertOpen, "성공 하였습니다.")
    } else {
      console.log(res)
      warning(setIsAlertOpen, res.resultMessage)
    }
  }).catch((e) => {
    console.error(e)
  })


}