import {requestApi} from "../../../../../api/mainApi";
import warning from "../../../components/Alert/SweetAlert/warning";
import success from "../../../components/Alert/SweetAlert/success";

export function sortList(infoKey, setData, setAlert) {
  const data = {patKey: infoKey.current}
  requestApi("/case/sortListSelectApi", data).then((res) => {
    if (res.resultCode === "0000") {
      setData(res.data)
    } else {
      warning(setAlert, res.resultMessage)
    }
  }).catch((e) => {
    console.error(e)
  })
}


export function update(dataList,setAlert) {
  requestApi("/case/sortUpdateApi", dataList).then((res) => {
    if (res.resultCode === "0000") {
      success(setAlert, "순서 변경 완료 되었습니다.")
    } else {
      warning(setAlert, res.resultMessage)
    }
  }).catch((e) => {
    console.error(e)
  })
}

