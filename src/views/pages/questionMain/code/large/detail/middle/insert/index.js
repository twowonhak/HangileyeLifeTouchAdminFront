import {Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Label} from "reactstrap";
import React, {useState} from "react";
import inputData from "../../../../../../../../utiles/fun/inputData";
import {onSave} from "./insert";

export default function MidInsert({lrgData, setAlert, isOpenListFun , search}) {

  const [data, setData] = useState({
    lrgCtgCd : lrgData.lrgCtgCd,
    lrgCtgNm : lrgData.lrgCtgNm,
    midCtgNm : '',
    lrgCtgSort : lrgData.lrgCtgSort,
  })

  const onInputData = (e) => {
    inputData(e, data, setData)
  }

  return (
      <>
    <Card>
      <CardHeader>
        <h3 className="mb-0">중 분류 등록</h3>
        <div className="d-flex justify-content-between">
        <p className="text-sm mb-0">
          위 대분류 하위에 등록 하시고자 하는 중 분류를 작성 해주세요.
        </p>
        {search}
        </div>
      </CardHeader>
      <CardBody>
        <Form>
          <FormGroup className="row">
            <Label
                className="form-control-label"
                htmlFor="example-text-input"
                md="1"
            >
              질문 내용
            </Label>
            <Col md="10">
              <Input
                  placeholder="최대 10자"
                  id="example-text-input"
                  type="text"
                  maxLength={20}
                  name={"midCtgNm"}
                  onChange={onInputData}
              />
            </Col>
          </FormGroup>
          <Button
              color="primary"
              type="button"
              size={'sm'}
              outline
              onClick={() => onSave(data, isOpenListFun, setAlert)}
          >
            등록
          </Button>
        </Form>
      </CardBody>
    </Card>
  </>
  )
}