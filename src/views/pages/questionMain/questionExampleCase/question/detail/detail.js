import success from "../../../../components/Alert/SweetAlert/success";
import warning from "../../../../components/Alert/SweetAlert/warning";
import {requestApi} from "../../../../../../api/mainApi";
import loginWarning from "../../../../components/Alert/SweetAlert/loginWarning";

export function detail(data, setData, setAlert) {
  console.log(data)
  const infoData = {key: data}
  requestApi("/question/detailSelectApi", infoData).then((res) => {
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
  const infoData = {key: data.key}
  requestApi("/question/deleteApi",infoData).then((res) => {
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
  if (data.useStrDat === '') {
    data.useStrDat = '99999999'
  }
  if (data.useEndDat === '') {
    data.useEndDat = '99999999'
  }

  requestApi("/question/updateApi",data).then((res) => {
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