import {requestApi} from "../../../../../../api/mainApi";
import warning from "../../../../components/Alert/SweetAlert/warning";
import info from "../../../../components/Alert/SweetAlert/info";

export function detail(data, setAlert, setData) {
  let reqData = {key: data.current}
  requestApi("/question/question/detailSelectApi", reqData).then((res) => {
    if (res.resultCode === "0000") {
      setData(res.data)
    } else {
      warning(setAlert, res.resultMessage)
    }
  }).catch((e) => {
    console.error(e)
  })
}

export function onUpdate(data, setAlert) {
  if (data.useStrDat === '' || data.useStrDat === undefined) {
    data.useStrDat = '00000000'
  }
  if (data.useEndDat === '' || data.useEndDat === undefined) {
    data.useEndDat = '99999999'
  }

  let ok = true
  if (data.queTxt === '' || data.queTxt === undefined) {
    ok = false
  }

  if (ok) {
    requestApi("/question/question/updateApi", data).then((res) => {
      if (res.resultCode === "0000") {
        info(setAlert, "수정 완료 되었습니다.")
      } else {
        warning(setAlert, res.resultMessage)
      }
    }).catch((e) => {
      console.error(e)
    })
  } else {
    warning(setAlert, "질문 내용은 필수 입니다.")
  }
}

export function onDelete(data, setAlert, isOpenListFun) {
  let reqData = {key: data.current}
  requestApi("/question/question/deleteApi", reqData).then((res) => {
    if (res.resultCode === "0000") {
      info(setAlert, "삭제 완료 되었습니다.", isOpenListFun)
    } else {
      warning(setAlert, res.resultMessage)
    }
  }).catch((e) => {
    console.error(e)
  })
}