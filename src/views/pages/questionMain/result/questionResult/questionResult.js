import {requestApi} from "../../../../../api/mainApi";
import warning from "../../../components/Alert/SweetAlert/warning";

export function select(codeInfo, setAlert, setDataList) {
  let resData = {
    lrgCtgCdArr: Object.keys(codeInfo.current),
    midCtgCdArr: Object.keys(codeInfo.current).map(key => ({ [key]: codeInfo.current[key] }))
    // midCtgCdArr: codeInfo.current
  }

  requestApi("/question/result/listSelectApi", resData).then((res) => {
    if (res.resultCode === "0000") {
      // res.data.queList.sort((a,b)=>{
      //   if (a.lrgCtgSort < b.lrgCtgSort) return -1;
      //   if (a.lrgCtgSort > b.lrgCtgSort) return 1;
      //   if (a.midCtgSort < b.midCtgSort) return -1;
      //   if (a.midCtgSort > b.midCtgSort) return 1;
      //   return 0;
      // })

      setDataList(res.data)
    } else {
      warning(setAlert, res.resultMessage)
    }
  }).catch((e) => {
    console.error(e)
  })
}