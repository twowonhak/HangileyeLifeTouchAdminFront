import warning from "../../../../components/Alert/SweetAlert/warning";
import success from "../../../../components/Alert/SweetAlert/success";
import {requestApi} from "../../../../../../api/mainApi";
import loginWarning from "../../../../components/Alert/SweetAlert/loginWarning";

export function detail(data, setData, setIsOpenAlert) {
  const infoData = {key: data.current.key}
  requestApi("/specialNote/detailSelectApi", infoData).then((res) => {
    if (res.resultCode === "0000") {
      setData(res.data)
    } else {
      
      warning(setIsOpenAlert, res.resultMessage)
    }
  }).catch((e) => {
    console.error(e)
  })
}

export function onDelete(data, setIsOpenMainFun, setIsOpenAlert) {
  const infoData = {key: data.current.key}
  requestApi("/specialNote/deleteApi", infoData).then((res) => {
    if (res.resultCode === "0000") {
      success(setIsOpenAlert, "삭제 완료 되었습니다.", setIsOpenMainFun)
    } else {
      
      warning(setIsOpenAlert, res.resultMessage)
    }
  }).catch((e) => {
    console.error(e)
  })
}
