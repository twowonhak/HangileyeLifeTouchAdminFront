import {requestApi} from "../../../../../../../../api/mainApi";
import warning from "../../../../../../components/Alert/SweetAlert/warning";

export function onSave(data, setAlert, isOpenListFun) {
  if(data.exaTxt !== ''){
    requestApi("/question/example/insertApi", data).then((res) => {
      if (res.resultCode === "0000") {
        isOpenListFun()
      } else {
        warning(setAlert, res.resultMessage)
      }
    }).catch((e) => {
      console.error(e)
    })
  }else{
    warning(setAlert, "보기 내용 입력은 필수 입니다.")
  }
  }