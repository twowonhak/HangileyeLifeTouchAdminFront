import {requestApi} from "../../../../../api/mainApi";
import warning from "../../../components/Alert/SweetAlert/warning";
import success from "../../../components/Alert/SweetAlert/success";

export function detail(info, setData, setAlert) {
  const resData = {id: info.current}
  requestApi("/stock/stock/detailSelectApi", resData).then((res) => {
    if (res.resultCode === "0000") {
      setData(res.data)
      console.log(res.data)
    } else {
      warning(setAlert, res.resultMessage)
    }
  }).catch((e) => {
    console.error(e)
  })
}

export function onUpdate(data, setAlert) {
  requestApi("/stock/stock/updateApi", data).then((res) => {
    if (res.resultCode === "0000") {
      success(setAlert, "수정 완료 되었습니다.")
    } else {
      warning(setAlert, res.resultMessage)
    }
  }).catch((e) => {
    console.error(e)
  })
}

export function onDelete(data, setAlert, onOpenFun) {
  requestApi("/stock/stock/deleteApi", data).then((res) => {
    if (res.resultCode === "0000") {
      success(setAlert, "삭제 완료 되었습니다.", onOpenFun)
    } else {
      warning(setAlert, res.resultMessage)
    }
  }).catch((e) => {
    console.error(e)
  })
}

export function onClear(data, setAlert, onOpenFun) {
  requestApi("/stock/stock/clearApi", data).then((res) => {
    if (res.resultCode === "0000") {
      success(setAlert, "회수 완료 되었습니다.", onOpenFun)
    } else {
      warning(setAlert, res.resultMessage)
    }
  }).catch((e) => {
    console.error(e)
  })
}

export function onUse(data, setAlert, onOpenFun) {
  requestApi("/stock/stock/useApi", data).then((res) => {
    if (res.resultCode === "0000") {
      success(setAlert, "사용 완료 되었습니다.", onOpenFun)
    } else {
      warning(setAlert, res.resultMessage)
    }
  }).catch((e) => {
    console.error(e)
  })
}