import {loginApi} from "../api/loginApi";
import warning from "./pages/components/Alert/SweetAlert/warning";

export const login = (e, loginData, navigate, setIsOpenAlert) => {
  e.preventDefault()

  loginApi(loginData).then((res) => {
        if (res.resultCode === "0000") {
          navigate('/auth/mainMenu')
        } else {
          warning(setIsOpenAlert, res.resultMessage)
        }
      }
  ).catch((e) => {
    console.error(e)
  })

}
