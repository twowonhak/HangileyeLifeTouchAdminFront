import {loginApi} from "../api/loginApi";

export const login = (e, loginData, navigate) => {
  e.preventDefault()

  loginApi(loginData).then((res) => {
        if (res.resultCode === "0000") {
          navigate('/auth/mainMenu')
        } else {
          alert(res.resultMessage)
        }
      }
  ).catch((e) => {
    console.error(e)
  })

}
