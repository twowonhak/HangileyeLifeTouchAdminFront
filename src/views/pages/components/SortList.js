import {Button, Card, CardHeader} from "reactstrap";
import BootstrapTable from "react-bootstrap-table-next";
import React from "react";
import ToolkitProvider from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";

export default function SortList({columns, dataList, title, sortUpdate}) {
  return (
      <>
        <Card>
          <CardHeader>
            <h3 className="mb-0">{title}</h3>
            <div className="d-flex justify-content-between">
              <p className="text-sm mb-0">
                상위 열이 먼저 가장 먼저 나오는 정보입니다.
              </p>
              <Button className={"btn btn-success btn-sm"} onClick={sortUpdate}>순서 변경 하기</Button>
            </div>
          </CardHeader>
          <ToolkitProvider
              data={dataList}
              keyField="key"
              columns={columns}
              search
          >
            {(props) => (
                <div className="py-4 table-responsive">

                  <BootstrapTable
                      {...props.baseProps}
                      bootstrap4={true}
                      bordered={false}
                  />
                </div>
            )}
          </ToolkitProvider>
        </Card>
      </>
  )
}