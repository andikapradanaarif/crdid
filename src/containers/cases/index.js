import React from "react";
import { CasesWrapper } from "./style";
import { Card } from "../../components";
import logCase from "../../datasets/logCase";

const Index = () => {
  const totalCases = logCase.reduce((total, item) => {
    return total + item.newCase;
  }, 0);
  const totalRecover = logCase.reduce((total, item) => {
    return total + item.recover;
  }, 0);
  const totalDeath = logCase.reduce((total, item) => {
    return total + item.death;
  }, 0);
  const activeCases = totalCases - totalDeath - totalRecover;

  return (
    <CasesWrapper>
      <Card title={"Total Kasus"} number={totalCases} />
      <Card title={"Kasus Aktif"} number={activeCases} />
      <Card title={"Total Recover"} number={totalRecover} />
      <Card title={"Total Kematian"} number={totalDeath} />
    </CasesWrapper>
  );
};

export default Index;
