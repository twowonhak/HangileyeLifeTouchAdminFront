import {Card, CardHeader} from "reactstrap";
import BootstrapTable from "react-bootstrap-table-next";
import React from "react";
import ToolkitProvider from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";

export default function SortList({columns, dataList, title, sortUpdate}) {
  return (
      <>
        <Card>
          <CardHeader>
            <h3 className="mb-0">{title}</h3>
            <p className="text-sm mb-0">
              상위 열이 먼저 가장 먼저 나오는 정보입니다.
            </p>
            <div className="dataTables_filter pt-2 float-right">
              <button className={"btn btn-success"} onClick={sortUpdate}>순서 변경 하기</button>
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