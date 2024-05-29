import {insertApi} from "../../../../../../api/patientCaseApi";
import {diagListApi} from "../../../../../../api/common";
import {specialNoteListSelectApi} from "../../../../../../api/specialNoteApi";
import warning from "../../../../components/Alert/SweetAlert/warning";
import info from "../../../../components/Alert/SweetAlert/info";

export function onSave(data, setIsOpen, setAlert) {
  if (data.useStrDat === '') {
    data.useStrDat = '99999999'
  }
  if (data.useEndDat === '') {
    data.useEndDat = '99999999'
  }

  let ok = true

  if (data.type === '' ||
      data.diagCd === '' ||
      data.sex === '' ||
      data.birth === '') {
    ok = false
  }

  if (ok) {
    insertApi(data).then((res) => {
      if (res.resultCode === "0000") {
        setIsOpen(false)
      } else {
        console.log(res)
        info(setAlert, res.resultMessage)
      }
    }).catch((e) => {
      console.error(e)
    })
  }
  else {
    warning(setAlert, "필수 항목 체크가 필요 합니다.")
  }
}

// 진료과 불러오기
export function diagListSelect(setDiagList) {
  diagListApi().then((res) => {
    if (res.resultCode === "0000") {
      setDiagList(res.data)
    } else {
      console.log(res)
      alert(res.resultMessage)
    }
  }).catch((e) => {
    console.error(e)
  })
}

// 특이사항 불러오기
export function specialNoteListSelect(setSpecialNoteList) {
  specialNoteListSelectApi().then((res) => {
    if (res.resultCode === "0000") {
      setSpecialNoteList(res.data)
    } else {
      console.log(res)
      alert(res.resultMessage)
    }
  }).catch((e) => {
    console.error(e)
  })
}