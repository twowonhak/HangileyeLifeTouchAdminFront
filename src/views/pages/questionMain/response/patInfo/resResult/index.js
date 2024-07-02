import React, {useEffect, useState} from "react";
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";
import SimpleHeader from "../../../../../../components/Headers/SimpleHeader";
import {responseList} from "./resResult";

export default function ResResult({chartNo, setAlert, setIsOpenSearchFun, setIsOpenResResult}) {

  console.log(chartNo.current)

  const [dataList, setDataList] = useState([{
    appDat: '',
    diagNm: '',
    doctNm: '',
    queTxt: '',
    patCase: '',
    exaTxt: '',
    exatype: '',
    resTxt: '',
    diviceTy: '',
    osNm: '',
    browserNm: '',
    appoNm: '',
    crDtime: '',
  }])

  useEffect(() => {
    responseList(chartNo.current.app, setAlert, setDataList)
  }, [])

  const menu = [
    {
      name: '환자검색(차트번호)', fun: () => {
        setIsOpenSearchFun()
      }
    },
    {
      name: '예약일자', fun: () => {
        setIsOpenResResult(true)
      }
    },
  ]

  return (
      <>
        <SimpleHeader name="답변" parentName="문진표" menu={menu}/>
        <Container className="mt--6" fluid>
          <Row>
            <div className="col">
              <Card>
                <CardHeader>
                  <h3 className="mb-0">문진 답변</h3>
                  <p className="text-sm mb-0">
                    환자가 직접 장성한 문진 내용 입니다.
                  </p>
                </CardHeader>
                <CardBody>
                  <Row className="py-3 align-items-center">
                    {
                      dataList.map((value, index) =>
                          <>
                            <Col sm="2">
                              <small className="text-uppercase text-muted font-weight-bold">
                                {value.queTxt}
                              </small>
                            </Col>
                            <Col sm="9">
                              <h3 className="heading mb-0">
                                {
                                  value.exatype === 'T'
                                      ? value.exaTxt + ' (Free) : ' + value.resTxt
                                      : value.exaTxt
                                }
                              </h3>
                            </Col>
                          </>)
                    }
                  </Row>
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                  <Row className="py-3 align-items-center">
                    <Col sm="2">
                      <small className="text-uppercase text-muted font-weight-bold">
                        환자케이스
                      </small>
                    </Col>
                    <Col sm="9">
                      <h3 className="heading mb-0">
                        {dataList[0].patCase}
                      </h3>
                    </Col>
                    <Col sm="2">
                      <small className="text-uppercase text-muted font-weight-bold">
                        진료구분
                      </small>
                    </Col>
                    <Col sm="9">
                      <h3 className="heading mb-0">
                        {dataList[0].appoNm}
                      </h3>
                    </Col>
                    <Col sm="2">
                      <small className="text-uppercase text-muted font-weight-bold">
                        진료과
                      </small>
                    </Col>
                    <Col sm="9">
                      <h3 className="heading mb-0">
                        {dataList[0].diagNm}
                      </h3>
                    </Col>
                    <Col sm="2">
                      <small className="text-uppercase text-muted font-weight-bold">
                        진료의
                      </small>
                    </Col>
                    <Col sm="9">
                      <h3 className="heading mb-0">
                        {dataList[0].doctNm}
                      </h3>
                    </Col>
                    <Col sm="2">
                      <small className="text-uppercase text-muted font-weight-bold">
                        작성 디바이스
                      </small>
                    </Col>
                    <Col sm="9">
                      <h3 className="heading mb-0">
                        {dataList[0].diviceTy}
                      </h3>
                    </Col>
                    <Col sm="2">
                      <small className="text-uppercase text-muted font-weight-bold">
                        작성 운영체제
                      </small>
                    </Col>
                    <Col sm="9">
                      <h3 className="heading mb-0">
                        {dataList[0].osNm}
                      </h3>
                    </Col>
                    <Col sm="2">
                      <small className="text-uppercase text-muted font-weight-bold">
                        작성 브라우저
                      </small>
                    </Col>
                    <Col sm="9">
                      <h3 className="heading mb-0">
                        {dataList[0].browserNm}
                      </h3>
                    </Col>
                    <Col sm="2">
                      <small className="text-uppercase text-muted font-weight-bold">
                        작성 일시
                      </small>
                    </Col>
                    <Col sm="9">
                      <h3 className="heading mb-0">
                        {dataList[0].crDtime}
                      </h3>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </div>
          </Row>
        </Container>
      </>
  )
}
