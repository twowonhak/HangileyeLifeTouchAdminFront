import {requestApi} from "../../../../../../../../api/mainApi";
import warning from "../../../../../../components/Alert/SweetAlert/warning";
import info from "../../../../../../components/Alert/SweetAlert/info";

export function detailSelect(info, setData, setAlert){
  let reqData = info.current
  requestApi("/question/queCode/midCtgDetailSelectApi", reqData).then((res) => {
    if (res.resultCode === "0000") {
      setData(res.data)
    } else {
      warning(setAlert, res.resultMessage)
    }
  }).catch((e) => {
    console.error(e)
  })
}

export function onDelete(reqData, setAlert, isOpenListFun){
  requestApi("/question/queCode/midCtgDeleteApi", reqData).then((res) => {
    if (res.resultCode === "0000") {
      info(setAlert, "삭제 완료 되었습니다.", isOpenListFun)
    } else {
      warning(setAlert, res.resultMessage)
    }
  }).catch((e) => {
    console.error(e)
  })
}

export function onUpdate(reqData, setAlert){
  requestApi("/question/queCode/midCtgUpdateApi", reqData).then((res) => {
    if (res.resultCode === "0000") {
      info(setAlert, "수정 완료 되었습니다.")
    } else {
      warning(setAlert, res.resultMessage)
    }
  }).catch((e) => {
    console.error(e)
  })
}