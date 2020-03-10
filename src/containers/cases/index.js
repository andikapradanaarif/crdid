import React from "react";
import { CasesWrapper } from "./style";
import { Card } from "../../components";
import { Row, Col } from "antd";

const Index = props => {
  return (
    <CasesWrapper>
      {/* <div className={"container_row"}>
        <Card title={"Coronavirus Cases:"} amount={10000} />
        <Card title={"Deaths:"} amount={10000} className={"container_deaths"} />
        <Card
          title={"Recovered:"}
          amount={10000}
          className={"container_recovered"}
        />
        <Card
          title={"Recovered:"}
          amount={10000}
          className={"container_recovered"}
        />
      </div> */}
      <Row gutter={8}>
        <Col lg={6}>Col 1</Col>
        <Col lg={6}>Col 2</Col>
        <Col lg={6}>Col 3</Col>
        <Col lg={6}>Col 4</Col>
      </Row>
    </CasesWrapper>
  );
};

export default Index;
