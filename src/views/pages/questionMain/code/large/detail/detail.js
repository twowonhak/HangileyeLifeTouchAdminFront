import {requestApi} from "../../../../../../api/mainApi";
import warning from "../../../../components/Alert/SweetAlert/warning";
import info from "../../../../components/Alert/SweetAlert/info";

export function detailSelect(info, setData, setAlert){
  let reqData = {lrgCtgCd : info.current}
  requestApi("/question/queCode/lrgCtgDetailSelectApi", reqData).then((res) => {
    if (res.resultCode === "0000") {
      setData(res.data)
    } else {
      warning(setAlert, res.resultMessage)
    }
  }).catch((e) => {
    console.error(e)
  })
}

export function listSelect(info, setAlert, setDataList){
  let reqData = {lrgCtgCd : info.current}
  requestApi("/question/queCode/ctgListSelectApi", reqData).then((res) => {
    if (res.resultCode === "0000") {
      setDataList(res.data.midCtg)
    } else {
      warning(setAlert, res.resultMessage)
    }
  }).catch((e) => {
    console.error(e)
  })
}

export function onDelete(reqData, setAlert, isOpenListFun){
  requestApi("/question/queCode/lrgCtgDeleteApi", reqData).then((res) => {
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
  requestApi("/question/queCode/lrgCtgUpdateApi", reqData).then((res) => {
    if (res.resultCode === "0000") {
      info(setAlert, "수정 완료 되었습니다.")
    } else {
      warning(setAlert, res.resultMessage)
    }
  }).catch((e) => {
    console.error(e)
  })
}
