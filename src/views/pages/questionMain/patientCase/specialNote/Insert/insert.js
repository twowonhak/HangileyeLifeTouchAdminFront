import {specialNoteInsertApi} from "../../../../../../api/specialNoteApi";

export function onSave(e, data, setIsOpen) {
  e.preventDefault()

  if (data.content.length === 0) {
    alert("입력 하시지 않은 정보가 있습니다.")
  } else {
    specialNoteInsertApi(data).then((res) => {
      if (res.resultCode === "0000") {
        setIsOpen(false)
      } else {
        console.log(res)
        alert(res.resultMessage)
      }
    }).catch((e) => {
      console.error(e)
    })
  }
}