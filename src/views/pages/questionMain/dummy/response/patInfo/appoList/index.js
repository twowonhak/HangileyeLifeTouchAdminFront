import React, {useEffect, useState} from "react";
import {Card, CardHeader} from "reactstrap";
import {appointmentList} from "./list";
import {paging} from "../../../../../components/pagination";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, {Search} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import warning from "../../../../../components/Alert/SweetAlert/warning";

export default function AppoList({chartNo, setAlert, setIsOpenResResult}) {

  const [dataList, setDataList] = useState([])
  const {SearchBar} = Search;
  const pagination = paging()
  const [check, setCheck] = useState([])

  useEffect(() => {
    appointmentList(chartNo, setAlert, setDataList)
  }, [])

  const columns = [
    {
      dataField: "seq",
      sort: true,
      text: "번호",
      hidden: true,
    },
    {
      dataField: "appDatDy",
      text: "예약+방문 일자",
      sort: true,
    },
    {
      dataField: "recvTm",
      text: "예약+방문 시간",
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
      dataField: "type",
      text: "방문정보",
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
        warning(setAlert, '문진표 미작성')
      }
    }
  };

  return (
      <>
        <Card>
          <CardHeader>
            <h3 className="mb-0">예약 + 방문 정보</h3>
            <div className="d-flex justify-content-between">
              <p className="text-sm mb-0">
              예약 환자 접수 시 예약시간->접수시간, 방문정보->방문으로 변경
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
