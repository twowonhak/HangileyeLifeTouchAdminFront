import {requestApi} from "../../../../../../../../api/mainApi";
import warning from "../../../../../../components/Alert/SweetAlert/warning";

export function listSelect(setDataList, info, setAlert){
  let reqData = {queKey : info.current}
  requestApi("/question/example/listSelectApi", reqData).then((res) => {
    if (res.resultCode === "0000") {
      setDataList(res.data)
    } else {
      warning(setAlert, res.resultMessage)
    }
  }).catch((e) => {
    console.error(e)
  })
}