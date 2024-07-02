import warning from "../../../../components/Alert/SweetAlert/warning";
import success from "../../../../components/Alert/SweetAlert/success";
import {requestApi} from "../../../../../../api/mainApi";

export function detail(data, setData, setAlert) {
  console.log(data)
  const infoData = {key: data.current}
  requestApi("/specialNote/detailSelectApi", infoData).then((res) => {
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
  const infoData = {key: data.current}
  requestApi("/specialNote/deleteApi", infoData).then((res) => {
    if (res.resultCode === "0000") {
      success(setAlert, "삭제 완료 되었습니다.", setIsOpenMainFun)
    } else {
      warning(setAlert, res.resultMessage)
    }
  }).catch((e) => {
    console.error(e)
  })
}
