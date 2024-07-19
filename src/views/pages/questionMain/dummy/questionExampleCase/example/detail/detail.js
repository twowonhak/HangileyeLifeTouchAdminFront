import warning from "../../../../../components/Alert/SweetAlert/warning";
import {requestApi} from "../../../../../../../api/mainApi";
import success from "../../../../../components/Alert/SweetAlert/success";

export function detail(queInfo, setData, setAlert) {
  requestApi("/example/detailSelectApi", queInfo).then((res) => {
    if (res.resultCode === "0000") {
      setData(res.data)
    } else {
      warning(setAlert, res.resultMessage)
    }
  }).catch((e) => {
    console.error(e)
  })
}

export function onDelete(data, setAlert, setIsOpenListFun) {
  requestApi("/example/deleteApi", data).then((res) => {
    if (res.resultCode === "0000") {
      success(setAlert, "삭제 완료 되었습니다.", setIsOpenListFun)
    } else {
      warning(setAlert, res.resultMessage)
    }
  }).catch((e) => {
    console.error(e)
  })
}

export function onUpdate(data, setAlert, setIsOpenListFun) {
  requestApi("/example/updateApi", data).then((res) => {
    if (res.resultCode === "0000") {
      success(setAlert, "수정 완료 되었습니다.", setIsOpenListFun)
    } else {
      warning(setAlert, res.resultMessage)
    }
  }).catch((e) => {
    console.error(e)
  })
}