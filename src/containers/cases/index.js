import React from "react";
import { CasesWrapper } from "./style";
import { Card } from "../../components";

const Index = props => {
  return (
    <CasesWrapper>
      <Card title={"Total Kasus"}>hola</Card>
      <Card title={"Total Aktif"}></Card>
      <Card title={"Total Sembuh"}></Card>
      <Card title={"Total Kematian"}></Card>
    </CasesWrapper>
  );
};

export default Index;
