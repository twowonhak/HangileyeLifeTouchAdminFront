import React from "react";
import PropTypes from "prop-types";
import {Breadcrumb, BreadcrumbItem, Button, Col, Container, Row,} from "reactstrap";
import {Link} from "react-router-dom";

function TimelineHeader({name, parentName, menu}) {
  return (
      <>
        <div className="header header-dark bg-info pb-6 content__title content__title--calendar">
          <Container fluid>
            <div className="header-body">
              <Row className="align-items-center py-4">
                <Col lg="6" xs="7">
                  <h6 className="fullcalendar-title h2 text-white d-inline-block mb-0">
                    {name}
                  </h6>{" "}
                  <Breadcrumb
                      className="d-none d-md-inline-block ml-lg-4"
                      listClassName="breadcrumb-links breadcrumb-dark"
                  >
                    <BreadcrumbItem>
                      <a>
                        <i className="fas fa-home"/>
                      </a>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                      <a>
                        {parentName}
                      </a>
                    </BreadcrumbItem>
                    <BreadcrumbItem aria-current="page" className="active">
                      {name}
                    </BreadcrumbItem>
                  </Breadcrumb>
                </Col>
                <Col className="mt-3 mt-md-0 text-md-right" lg="6" xs="5">
                  {
                    menu.map((value, index) => {
                      return (
                          <Button key={index} className="btn-neutral" color="default" size="sm" onClick={value.fun}>
                            {value.name}
                          </Button>
                      )
                    })
                  }
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </>
  );
}

TimelineHeader.propTypes = {
  name: PropTypes.string,
  parentName: PropTypes.string,
};

export default TimelineHeader;
