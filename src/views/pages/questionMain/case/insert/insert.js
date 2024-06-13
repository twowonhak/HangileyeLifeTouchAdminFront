import {requestApi} from "../../../../../api/mainApi";
import info from "../../../components/Alert/SweetAlert/info";
import warning from "../../../components/Alert/SweetAlert/warning";

export function listSelect(setDataList, searchDate) {
  requestApi("/case/queListSelectApi", searchDate).then((res) => {
    if (res.resultCode === "0000") {
      setDataList(res.data)
    } else {
      // alert(res.resultMessage)
    }
  }).catch((e) => {
    console.error(e)
  })
}

export function queInsert(patInfo, checkData, setIsOpenAlert, onOpenFun) {
  if (checkData.length) {
    let data = {
      patKey: patInfo.current,
      queKeyArr: checkData
    }
    requestApi("/case/insertApi", data).then((res) => {
      if (res.resultCode === "0000") {
        onOpenFun()
      } else {
        info(setIsOpenAlert, res.resultMessage)
      }
    }).catch((e) => {
      console.error(e)
      // loginWarning(setIsOpenAlert, navigate)
    })
  } else {
    warning(setIsOpenAlert, "질문이 선택 되지 않았습니다.")
  }


}


