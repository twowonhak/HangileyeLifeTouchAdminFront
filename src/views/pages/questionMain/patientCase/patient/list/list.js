import {requestApi} from "../../../../../../api/mainApi";

export default function listSelect(setDataList) {
  requestApi("/patientCase/listSelectApi").then((res) => {
    if (res.resultCode === "0000") {

      // res.data.forEach((i)=>{
      //   type.forEach((j)=>{
      //     i.type = i.type.replace(j.value, j.title)
      //   })
      //   birth.forEach((j)=>{
      //     i.birth = i.birth.replace(j.value, j.title)
      //   })
      //   sex.forEach((j)=>{
      //     i.sex = i.sex.replace(j.value, j.title)
      //   })
      //   pagtTy.forEach((j)=>{
      //     i.pagtTy = i.pagtTy.replace(j.value, j.title)
      //   })
      //   type.forEach((j)=>{
      //     i.type = i.type.replace(j.value, j.title)
      //   })
      // })
      //

      setDataList(res.data)
    } else {
      // alert(res.resultMessage)
    }
  }).catch((e) => {
    console.error(e)
  })
}
