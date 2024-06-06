import {Card, CardHeader} from "reactstrap";
import BootstrapTable from "react-bootstrap-table-next";
import React from "react";
import ToolkitProvider, {Search} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import {paging} from "./pagination";

export default function List({dataList, info, columns, title, contents, setIsOpenDetailFun}) {
  const {SearchBar} = Search;
  const pagination = paging()

  const selectRow = {
    mode: 'radio',
    clickToSelect: true,
    bgColor: '#c8e6c9',
    hideSelectColumn: true,
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
            <p className="text-sm mb-0">
              {contents}
            </p>
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