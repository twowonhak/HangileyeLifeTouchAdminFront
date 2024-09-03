import {requestApi} from "../../../../../../../api/mainApi";
import warning from "../../../../../components/Alert/SweetAlert/warning";

export function responseList(app, setAlert, setDataList) {
  app.current.app.chartNo = app.current.chartNo
  requestApi("/response/responseResultListSelectApi", app.current.app).then((res) => {
    if (res.resultCode === "0000") {
      setDataList(res.data)
    } else {
      warning(setAlert, res.resultMessage)
    }
  }).catch((e) => {
    console.error(e)
  })
}