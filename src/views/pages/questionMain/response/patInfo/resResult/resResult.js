import {requestApi} from "../../../../../../api/mainApi";
import warning from "../../../../components/Alert/SweetAlert/warning";

export function responseList(app, setIsOpenAlert, setDataList) {
  requestApi("/response/responseResultListSelectApi", app).then((res) => {
    if (res.resultCode === "0000") {
      setDataList(res.data)
      console.log(res.data)

    } else {
      warning(setIsOpenAlert, res.resultMessage)
    }
  }).catch((e) => {
    console.error(e)
  })
}