import inputData from "../../../../../utiles/fun/inputData";
import {Card, CardBody, CardHeader} from "reactstrap";
import React, {useState} from "react";
import inputOnlyNumber from "../../../../../utiles/fun/inputOnlyNumber";

export default function DisInsert({info, onOpenFun, setAlert}) {

  const [data, setData] = useState({})

  const onInputData = (e) => {
    inputData(e, data, setData)
  }

  const onNumInputData = (e) => {
    inputOnlyNumber(e, data, setData)
  }

  return (
      <>
        <Card>
          <CardHeader>
            <h3 className="mb-0">재고</h3>
            <p className="text-sm mb-0">
              재고등록을 위해 해당 정보를 입력 해주세요.
            </p>
          </CardHeader>
          <CardBody>

          </CardBody>
        </Card>
      </>
  )
}