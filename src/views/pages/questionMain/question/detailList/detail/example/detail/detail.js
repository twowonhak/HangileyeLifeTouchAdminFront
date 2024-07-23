import {requestApi} from "../../../../../../../../api/mainApi";
import warning from "../../../../../../components/Alert/SweetAlert/warning";
import info from "../../../../../../components/Alert/SweetAlert/info";

export function detail(queInfo, setData, setAlert) {
  requestApi("/question/example/detailSelectApi", queInfo).then((res) => {
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
  if (data.exaTxt !== '') {
    requestApi("/question/example/updateApi", data).then((res) => {
      if (res.resultCode === "0000") {
        info(setAlert, "수정 완료 되었습니다.")
      } else {
        warning(setAlert, res.resultMessage)
      }
    }).catch((e) => {
      console.error(e)
    })
  } else {
    warning(setAlert, "보기 내용은 필수 입력 입니다.")
  }
}

export function onDelete(data, setAlert, isOpenListFun) {
  let reqData = {key: data.current}
  requestApi("/question/example/deleteApi", reqData).then((res) => {
    if (res.resultCode === "0000") {
      info(setAlert, "삭제 완료 되었습니다.", isOpenListFun)
    } else {
      warning(setAlert, res.resultMessage)
    }
  }).catch((e) => {
    console.error(e)
  })
}