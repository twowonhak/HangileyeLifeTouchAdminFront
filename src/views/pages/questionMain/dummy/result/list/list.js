import {requestApi} from "../../../../../../api/mainApi";
import warning from "../../../../components/Alert/SweetAlert/warning";

export function listSelect(setDataList, data, setAlert) {
  requestApi("/result/resultListSelectApi", data.current).then((res) => {
    if (res.resultCode === "0000") {
      setDataList(res.data)
    } else {
      warning(setAlert, res.resultMessage)
    }
  }).catch((e) => {
    console.error(e)
  })
}
