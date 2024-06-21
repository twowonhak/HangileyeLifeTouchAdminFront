import {requestApi} from "../../../../../../api/mainApi";
import warning from "../../../../components/Alert/SweetAlert/warning";

export function appointmentList(chartNo, setIsOpenAlert, setDataList) {
  const resData = {chartNo: chartNo.current.chartNo}
  requestApi("/common/appointmentListSelectApi", resData).then((res) => {
    if (res.resultCode === "0000") {
      setDataList(res.data)
    } else {
      warning(setIsOpenAlert, res.resultMessage)
    }
  }).catch((e) => {
    console.error(e)
  })
}