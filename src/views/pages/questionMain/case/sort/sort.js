import {requestApi} from "../../../../../api/mainApi";
import warning from "../../../components/Alert/SweetAlert/warning";
import success from "../../../components/Alert/SweetAlert/success";

export function sortList(infoKey, setData, setIsOpenAlert) {
  const data = {patKey: infoKey.current}
  requestApi("/case/sortListSelectApi", data).then((res) => {
    if (res.resultCode === "0000") {
      setData(res.data)
    } else {
      warning(setIsOpenAlert, res.resultMessage)
    }
  }).catch((e) => {
    console.error(e)
  })
}


export function update(dataList,setIsOpenAlert) {
  requestApi("/case/sortUpdateApi", dataList).then((res) => {
    if (res.resultCode === "0000") {
      success(setIsOpenAlert, "순서 변경 완료 되었습니다.")
    } else {
      warning(setIsOpenAlert, res.resultMessage)
    }
  }).catch((e) => {
    console.error(e)
  })
}

