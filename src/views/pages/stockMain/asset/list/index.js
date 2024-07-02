import SimpleHeader from "../../../../../components/Headers/SimpleHeader";
import {Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row} from "reactstrap";
import List from "../../../components/List";
import React, {useEffect, useState} from "react";
import {onInsert} from "./insert";
import inputData from "../../../../../utiles/fun/inputData";
import {listSelect} from "./list";

export default function AssetList() {

  const [data, setData] = useState({name: ''})
  const [dataList, setDataList] = useState([])
  const [alert, setAlert] = useState(null)

  const columns = [
    {
      dataField: "id",
      text: "장비코드",
      sort: true,
    },
    {
      dataField: "name",
      text: "장비명",
      sort: true,
    },
  ]

  useEffect(() => {
    listSelect(setDataList)
  }, [])

  return (
      <>
        {alert}
        <SimpleHeader name="재고분류 코드" parentName="재고" menu={[]}/>
        <Container className="mt--6" fluid>
          <Row>
            <div className="col">
              <List dataList={dataList} type={'radio'} info={''} columns={columns} title={"목록"}
                    contents={""}
                    setIsOpenDetailFun={null}/>
            </div>
          </Row>
          <Row>
            <div className="col">
              <Card>
                <CardHeader>
                  <h3 className="mb-0">코드 분류 추가</h3>
                  <p className="text-sm mb-0">
                  </p>
                </CardHeader>
                <CardBody>

                  <Form>
                    <FormGroup className="row">
                      <Label
                          className="form-control-label"
                          htmlFor="example-text-input"
                          md="1"
                      >
                        장비명
                      </Label>
                      <Col md="10">
                        <Input
                            placeholder="최대 10자"
                            id="example-text-input"
                            type="text"
                            name={'name'}
                            value={data.name || ''}
                            maxLength={10}
                            onChange={(e)=>{inputData(e, data, setData)}}
                        />
                      </Col>
                    </FormGroup>
                    <Button
                        color="primary"
                        type="button"
                        onClick={() => onInsert(data, setDataList, setAlert)}
                    >
                      저장
                    </Button>
                  </Form>
                </CardBody>
              </Card>
            </div>
          </Row>
        </Container>
      </>
  )
}