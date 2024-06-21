import React, {useEffect, useState} from "react";
import {Button, Card, CardHeader} from "reactstrap";
import {appointmentList, questionCheck} from "./list";
import {paging} from "../../../../components/pagination";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, {Search} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import warning from "../../../../components/Alert/SweetAlert/warning";

export default function AppoList({chartNo, setIsOpenAlert, setIsOpenResResult}) {

  const [dataList, setDataList] = useState([])
  const {SearchBar} = Search;
  const pagination = paging()
  const [check, setCheck] = useState([])

  useEffect(() => {
    appointmentList(chartNo, setIsOpenAlert, setDataList)
  }, [])

  const columns = [
    {
      dataField: "seq",
      text: "번호",
      sort: true,
    },
    {
      dataField: "appDatDy",
      text: "예약일자",
      sort: true,
    },
    {
      dataField: "appTime",
      text: "예약시간",
      sort: true,
    },
    {
      dataField: "diagNm",
      text: "진료과",
      sort: true,
    },
    {
      dataField: "doctNm",
      text: "진료의",
      sort: true,
    },
    {
      dataField: "appoNm",
      text: "예약구분",
      sort: true,
    },
    {
      dataField: "vistYn",
      text: "방문여부",
      sort: true,
    },
    {
      dataField: "queYn",
      text: "문진표 작성여부",
      sort: true,
    },
  ]

  const selectRow = {
    mode: 'radio',
    clickToSelect: true,
    bgColor: '#fbffdd',
    hideSelectColumn: true,
    onSelect: (row, isSelected, e) => {
        let arr = check
        if (isSelected) {
          setCheck([...check, row.seq])
        } else {
          for (let i = 0; i < arr.length; i++) {
            if (arr[i] === row.seq) {
              arr.splice(i, 1)
            }
          }
          setCheck(arr)
        }
    }
  };

  const rowEvents = {
    onDoubleClick: (e, row, rowIndex) => {
      if(row.queYn === 'O'){
        chartNo.current.app = row
        setIsOpenResResult(false)
      }else{
        warning(setIsOpenAlert, '문진표 미작성')
      }
    }
  };

  return (
      <>
        <Card>
          <CardHeader>
            <h3 className="mb-0">예약 정보</h3>
            <div className="d-flex justify-content-between">
              <p className="text-sm mb-0">
               예약일에 작성 된 문진 내용을 확인 할 수 있습니다.
              </p>
            </div>
          </CardHeader>
          <ToolkitProvider
              data={dataList}
              keyField="seq"
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
