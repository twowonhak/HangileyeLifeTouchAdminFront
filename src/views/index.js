import React, {useEffect, useState} from 'react';

import {Button, Card, CardBody, Col, Container, Form, FormGroup, Input, InputGroup, Row,} from "reactstrap";
import {useNavigate} from "react-router-dom";
import inputData from "../utiles/fun/inputData";
import {useCookies} from "react-cookie";
import AuthHeader from "../components/Headers/AuthHeader";
import {login} from "./login";

export default function Login() {

  // todo: defult 값 제거 하기
  const [loginData, setLoginData] = useState({
    "id": "221211",
    "pw": "221211",
  });
  const navigate = useNavigate();

  const [cookies, setCookie, removeCookie] = useCookies();
  const [isOpenAlert, setIsOpenAlert] = useState(null)

  useEffect(()=>{
    Object.keys(cookies).forEach(name => {
      removeCookie(name)
    });
  },[])


  const onInputData = (e) => {
    inputData(e, loginData, setLoginData)
  }

  return (
      <>
        {isOpenAlert}
        <AuthHeader
            title="한길 안과 병원"
            lead="병원 내부에서 사용하는 공용 웹 사이트 입니다."
        />
        <Container className="mt--8 pb-5">
          <Row className="justify-content-center">
            <Col lg="5" md="7">
              <Card className="bg-secondary shadow border-0">
                <CardBody className="px-lg-5 py-lg-5">
                  <div className="text-center text-muted mb-4">
                    <small>회원 정보는 OCX(이온엠) 계정과 동일 합니다.</small>
                  </div>
                  <Form role="form" onSubmit={(e) => login(e, loginData, navigate, setIsOpenAlert)}>
                    <FormGroup className="mb-3">
                      <InputGroup className="input-group-alternative">
                        <Input
                            name="id"
                            placeholder="사번을 입력 해주세요."
                            type="text"
                            value={loginData.id}
                            onChange={onInputData}
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <Input
                            placeholder="이온엠 비밀번호를 입력 해주세요."
                            type="password"
                            name="pw"
                            value={loginData.pw}
                            onChange={onInputData}
                        />
                      </InputGroup>
                    </FormGroup>
                    <div className="text-center">
                      <Button className="my-4" color="primary" type="submit">
                        로그인
                      </Button>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
  )
}