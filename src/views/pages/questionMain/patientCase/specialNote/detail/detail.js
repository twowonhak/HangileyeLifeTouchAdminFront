import warning from "../../../../components/Alert/SweetAlert/warning";
import {specialNoteDeleteApi, specialNoteDetailSelectApi} from "../../../../../../api/specialNoteApi";
import success from "../../../../components/Alert/SweetAlert/success";

export function detail(data, setData) {
  const infoData = {key: data.current.key}
  specialNoteDetailSelectApi(infoData).then((res) => {
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
  specialNoteDeleteApi(infoData).then((res) => {
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
