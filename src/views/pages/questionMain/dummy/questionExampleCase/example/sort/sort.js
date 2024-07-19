import warning from "../../../../../components/Alert/SweetAlert/warning";
import {requestApi} from "../../../../../../../api/mainApi";
import success from "../../../../../components/Alert/SweetAlert/success";

export function sortList(key, setData, setAlert) {
  const data = {key : key}
  requestApi("/example/listSelectApi", data).then((res) => {
    if (res.resultCode === "0000") {
      setData(res.data)
    } else {
      warning(setAlert, res.resultMessage)
    }
  }).catch((e) => {
    console.error(e)
  })
}


export function update(dataList, setAlert) {
  requestApi("/example/sortUpdateApi", dataList).then((res) => {
    if (res.resultCode === "0000") {
      success(setAlert, "순서 변경 완료 되었습니다.")
    } else {
      warning(setAlert, res.resultMessage)
    }
  }).catch((e) => {
    console.error(e)
  })
}

