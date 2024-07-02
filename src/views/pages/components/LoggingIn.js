import {memo, useEffect} from "react";
import {useCookies} from "react-cookie";
import {useNavigate} from "react-router-dom";

// 헤더
export default function LoggingIn() {

  const [cookies, setCookie, removeCookie] = useCookies();
  const navigate = useNavigate();

  useEffect(() => {
    if (cookies.ID === undefined) {
      alert("로그인 정보가 없거나 혹은 일정 시간이 경과 되었습니다.")
      navigate('/auth/login')
    }
  })


}