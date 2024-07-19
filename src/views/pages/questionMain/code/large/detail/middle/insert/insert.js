import {requestApi} from "../../../../../../../../api/mainApi";
import warning from "../../../../../../components/Alert/SweetAlert/warning";

export function onSave(data, fun, setAlert) {

  console.log(data)
  requestApi("/question/queCode/midCtgInsertApi", data).then((res) => {
    if (res.resultCode === "0000") {
      fun()
    } else {
      warning(setAlert, res.resultMessage)
    }
  }).catch((e) => {
    console.error(e)
  })
}