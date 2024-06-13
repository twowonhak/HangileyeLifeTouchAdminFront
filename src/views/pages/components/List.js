import {Button, Card, CardHeader} from "reactstrap";
import BootstrapTable from "react-bootstrap-table-next";
import React, {useState} from "react";
import ToolkitProvider, {Search} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import {paging} from "./pagination";

export default function List({dataList, type, info, insertFun, setCheckData, columns, title, contents, setIsOpenDetailFun}) {
  const {SearchBar} = Search;
  const pagination = paging()
  const [check, setCheck] = useState([])

  const selectRow = {
    mode: type,
    clickToSelect: true,
    bgColor: '#fbffdd',
    hideSelectColumn: true,
    onSelect: (row, isSelected, e) => {
      if (type === "checkbox") {
        let arr = check
        if (isSelected) {
          setCheck([...check, row.key])
        } else {
          for (let i = 0; i < arr.length; i++) {
            if (arr[i] === row.key) {
              arr.splice(i, 1)
            }
          }
          setCheck(arr)
        }
      }
    }
  };

  const rowEvents = {
    onDoubleClick: (e, row, rowIndex) => {
      info.current = row
      setIsOpenDetailFun()
    }
  };

  return (
      <>
        <Card>
          <CardHeader>
            <h3 className="mb-0">{title}</h3>
            <div className="d-flex justify-content-between">
              <p className="text-sm mb-0">
                {contents}
              </p>
              {
                type === "checkbox"
                    ? <Button className={"btn btn-success btn-sm"} onClick={()=>insertFun(check)}>등록</Button>
                    : null
              }
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
                  <div
                      id="datatable-basic_filter"
                      className="dataTables_filter px-4 pb-1"
                  >
                    <label>
                      Search:
                      <SearchBar
                          className="form-control-sm"
                          placeholder=""
                          {...props.searchProps}
                      />
                    </label>
                  </div>
                  <BootstrapTable
                      {...props.baseProps}
                      bootstrap4={true}
                      pagination={pagination}
                      bordered={false}
                      selectRow={selectRow}
                      rowEvents={rowEvents}
                  />
                </div>
            )}
          </ToolkitProvider>
        </Card>
      </>
  )
}