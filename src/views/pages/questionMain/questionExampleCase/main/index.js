import {Card, CardHeader} from "reactstrap";
import BootstrapTable from "react-bootstrap-table-next";
import React, {useState} from "react";
import {paging} from "../../../components/pagination";
import ToolkitProvider, {Search} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";

export default function Main({dataList}) {

  const {SearchBar} = Search;
  const pagination = paging()

  const [selected, setSelected] = useState();

  const selectRow = {
    mode: 'radio',
    clickToSelect: true,
    bgColor: '#c8e6c9',
    hideSelectColumn: true,
    onSelect: (row, isSelect, rowIndex, e) => {
      setSelected(row);
    }
  };

  return (
      <>
        <Card>
          <CardHeader>
            <h3 className="mb-0">질문 케이스</h3>
            <p className="text-sm mb-0">
              환자에게 질문 되는 케이스 입니다.
            </p>
          </CardHeader>
          <ToolkitProvider
              data={dataList}
              keyField="key"
              columns={[
                {
                  dataField: "key",
                  text: "Name",
                  sort: true,
                },
              ]}
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
                  />
                </div>
            )}
          </ToolkitProvider>
        </Card>
      </>
  )
}