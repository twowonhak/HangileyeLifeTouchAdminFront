import React from 'react';
import AuthHeader from "../../../components/Headers/AuthHeader";
import {Button, Card, CardBody, Col, Container, Row} from "reactstrap";
import {Link} from "react-router-dom";

export default function MainMenu() {

  return (
      <>
        <AuthHeader
            title="메뉴 선택"
            lead="원하시는 메뉴를 선택 해주세요."
        />
        <Container className="mt--8 pb-5">
          <Row className="justify-content-center">
            <Col lg="5" md="7">
              <Card className="bg-secondary shadow border-0">
                <CardBody className="px-lg-5 py-lg-5">
                  <div className="text-center text-muted mb-4">
                    <small>권한 필요 시 전산요청 사항을 작성 해주세요.</small>
                  </div>
                  <div className="mb-4">
                    <Link to="/questionMain">
                      <Button block color="primary" size="lg" type="button">
                        문진표
                      </Button>
                    </Link>
                  </div>
                  <div className="mb-4">
                    <Link to="/stockMain">
                      <Button block color="secondary" size="lg" type="button">
                        재고 관리
                      </Button>
                    </Link>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
  )
}