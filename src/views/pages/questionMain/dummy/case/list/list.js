import {requestApi} from "../../../../../../api/mainApi";
import success from "../../../../components/Alert/SweetAlert/success";
import warning from "../../../../components/Alert/SweetAlert/warning";

export function listSelect(setDataList, patInfo) {
  let reqData = {key: patInfo.current}
  requestApi("/case/okListSelectApi", reqData).then((res) => {
    if (res.resultCode === "0000") {
      setDataList(res.data)
    } else {
      // alert(res.resultMessage)
    }
  }).catch((e) => {
    console.error(e)
  })
}

export function onDelete(info, patInfo, setDataList, setIsNotificationAlertOpen, setAlert){
  const infoData = {
    patKey: patInfo.current,
    queKey: info.current.key
  }
  requestApi("/case/deleteApi", infoData).then((res) => {
    if (res.resultCode === "0000") {
      setIsNotificationAlertOpen(null)
      success(setAlert, "삭제 완료 되었습니다.")
      listSelect(setDataList, patInfo)
    } else {
      warning(setAlert, res.resultMessage)
    }
  }).catch((e) => {
    console.error(e)
  })
}