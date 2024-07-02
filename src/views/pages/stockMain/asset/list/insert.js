import {requestApi} from "../../../../../api/mainApi";
import warning from "../../../components/Alert/SweetAlert/warning";

export function onInsert(data, setDataList, setAlert) {
  if (data.name !== '') {
    requestApi("/stock/asset/insertApi", data).then((res) => {
      if (res.resultCode === "0000") {
        setDataList(res.data)
      } else {
        warning(setAlert, res.resultMessage)
      }
    }).catch((e) => {
      console.error(e)
    })
  } else {
    warning(setAlert, "필수 항목 입력 필요 합니다.")
  }
}