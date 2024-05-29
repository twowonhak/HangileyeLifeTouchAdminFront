import React, {useRef, useState} from 'react';
import SimpleHeader from "../../../components/Headers/SimpleHeader";
import {Card, CardHeader, Container, Row} from "reactstrap";
import {dataTable} from "../../../variables/general";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, {Search} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import {paging} from "../components/pagination";
import ReactBSAlert from "react-bootstrap-sweetalert";

export default function QuestionMain() {

  // case open
  const [caseInsertModal, setCaseInsertModal] = useState(false);
  const [alert, setAlert] = useState(null);

  const [menu, setMenu] = useState([
    {name: '생성', fun: ()=>{
        alertTest()
      }},
  ]);
  const {SearchBar} = Search;
  const pagination = paging()

  function alertTest(){
    setAlert(
        <ReactBSAlert
            success
            style={{ display: "block", marginTop: "-100px" }}
            title="Good job!"
            onConfirm={() => setAlert(null)}
            onCancel={() => setAlert(null)}
            confirmBtnBsStyle="info"
            btnSize=""
        >
          Copied to clipboard!
        </ReactBSAlert>
    );
  }


  return (
      <>
        {alert}
        <SimpleHeader name="질문케이스" parentName="문진표" menu={menu}/>
        <Container className="mt--6" fluid>
          <Row>
            <div className="col">
              <Card>
                <CardHeader>
                  <h3 className="mb-0">질문 케이스</h3>
                  <p className="text-sm mb-0">
                    환자에게 질문 되는 케이스 입니다.
                  </p>
                </CardHeader>
                <ToolkitProvider
                    data={dataTable}
                    keyField="name"
                    columns={[
                      {
                        dataField: "name",
                        text: "Name",
                        sort: true,
                      },
                      {
                        dataField: "position",
                        text: "Position",
                        sort: true,
                      },
                      {
                        dataField: "office",
                        text: "Office",
                        sort: true,
                      },
                      {
                        dataField: "age",
                        text: "Age",
                        sort: true,
                      },
                      {
                        dataField: "start_date",
                        text: "Start date",
                        sort: true,
                      },
                      {
                        dataField: "salary",
                        text: "Salary",
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
                        />
                      </div>
                  )}
                </ToolkitProvider>
              </Card>
            </div>
          </Row>
        </Container>
      </>
  )
}