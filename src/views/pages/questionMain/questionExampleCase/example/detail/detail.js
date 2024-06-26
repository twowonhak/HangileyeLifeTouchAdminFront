import warning from "../../../../components/Alert/SweetAlert/warning";
import {requestApi} from "../../../../../../api/mainApi";
import success from "../../../../components/Alert/SweetAlert/success";

export function detail(queInfo, setData, setIsOpenAlert) {
  requestApi("/example/detailSelectApi", queInfo).then((res) => {
    if (res.resultCode === "0000") {
      setData(res.data)
    } else {
      warning(setIsOpenAlert, res.resultMessage)
    }
  }).catch((e) => {
    console.error(e)
  })
}

export function onDelete(data, setIsOpenAlert, setIsOpenListFun) {
  requestApi("/example/deleteApi", data).then((res) => {
    if (res.resultCode === "0000") {
      success(setIsOpenAlert, "삭제 완료 되었습니다.", setIsOpenListFun)
    } else {
      warning(setIsOpenAlert, res.resultMessage)
    }
  }).catch((e) => {
    console.error(e)
  })
}

export function onUpdate(data, setIsOpenAlert, setIsOpenListFun) {
  requestApi("/example/updateApi", data).then((res) => {
    if (res.resultCode === "0000") {
      success(setIsOpenAlert, "수정 완료 되었습니다.", setIsOpenListFun)
    } else {
      warning(setIsOpenAlert, res.resultMessage)
    }
  }).catch((e) => {
    console.error(e)
  })
}