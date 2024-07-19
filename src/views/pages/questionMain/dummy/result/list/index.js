import React, {memo, useEffect, useRef, useState} from "react";
import SimpleHeader from "../../../../../../components/Headers/SimpleHeader";
import {Card, CardBody, CardHeader, Col, Container, Input, Row} from "reactstrap";
import {listSelect} from "./list";

export default memo(function ResultList({patInfo, onOpenFun, setAlert}) {

  const [dataList, setDataList] = useState([])
  const menu = [
    {
      name: '환자 조회', fun: () => {
        onOpenFun()
      }
    },
  ]
  const columns = [
    {
      dataField: "content",
      text: "질문",
      sort: true,
    },
    {
      dataField: "useStrDat",
      text: "적용기간 - 시작",
      sort: true,
    },
    {
      dataField: "useEndDat",
      text: "적용기간 - 마감",
      sort: true,
    },
  ]

  useEffect(() => {
    listSelect(setDataList, patInfo, setAlert)
  }, [])


  return (
      <>
        <SimpleHeader name="최종 문진표" parentName="문진표" menu={menu}/>
        <Container className="mt--6" fluid>
          <Row>
            <div className="col">
              {
                dataList.map((value, index) =>
                    <Card key={index}>
                      <CardHeader>
                        <h3 className="mb-0">{value.content}</h3>
                      </CardHeader>
                      <CardBody>
                        {
                          value.exampleArr.map((value, index) =>
                              <Row key={index} className="py-1 align-items-center">
                                <Col sm="1">
                                  <small className="text-uppercase text-muted font-weight-bold">
                                    {index + 1}.
                                  </small>
                                </Col>
                                <Col sm="9">
                                  {
                                    value.type == 'C'
                                      ? <h3 className="heading mb-0">{value.content}</h3>
                                      : <Input
                                            className="form-control-sm"
                                            defaultValue={value.content}
                                            id="example-text-input"
                                            type="text"
                                        />
                                  }
                                </Col>
                              </Row>)
                        }
                      </CardBody>
                    </Card>
                )
              }
            </div>
          </Row>
        </Container>
      </>
  )
})
