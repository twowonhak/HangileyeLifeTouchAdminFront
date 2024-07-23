import {requestApi} from "../../../../../../api/mainApi";
import warning from "../../../../components/Alert/SweetAlert/warning";

export function listSelect(setDataList, reqData, setAlert){
  requestApi("/question/question/listSelectApi", reqData).then((res) => {
    if (res.resultCode === "0000") {
      setDataList(res.data)
    } else {
      warning(setAlert, res.resultMessage)
    }
  }).catch((e) => {
    console.error(e)
  })
}