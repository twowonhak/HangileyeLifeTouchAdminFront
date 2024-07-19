import {requestApi} from "../../../../../../api/mainApi";
import info from "../../../../components/Alert/SweetAlert/info";
import warning from "../../../../components/Alert/SweetAlert/warning";

export function listSelect(setDataList, searchDate) {
  let data = {
    key: searchDate.current,
  }
  requestApi("/case/noListSelectApi", data).then((res) => {
    if (res.resultCode === "0000") {
      setDataList(res.data)
    } else {
      // alert(res.resultMessage)
    }
  }).catch((e) => {
    console.error(e)
  })
}

export function queInsert(patInfo, checkData, setAlert, onOpenFun) {
  if (checkData.length) {
    let data = {
      patKey: patInfo.current,
      queKeyArr: checkData
    }

    requestApi("/case/insertApi", data).then((res) => {
      if (res.resultCode === "0000") {
        info(setAlert, "질문 추가 되었습니다.", onOpenFun)
      } else {
        info(setAlert, res.resultMessage)
      }
    }).catch((e) => {
      console.error(e)
      // loginWarning(setAlert, navigate)
    })
  } else {
    warning(setAlert, "질문이 선택 되지 않았습니다.")
  }


}


