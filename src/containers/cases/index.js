import React, { useState, useEffect } from "react";
import { CasesWrapper } from "./style";
import { Card } from "../../components";
import { csv } from "d3-fetch";

const Index = () => {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    csv("/data/logCase.csv").then(data => {
      setCases(data);
    });
  }, []);

  const totalCases = cases.reduce((total, item) => {
    return total + parseInt(item.newCase);
  }, 0);
  const totalRecover = cases.reduce((total, item) => {
    return total + parseInt(item.recover);
  }, 0);
  const totalDeath = cases.reduce((total, item) => {
    return total + parseInt(item.death);
  }, 0);

  const activeCases = totalCases - totalDeath - totalRecover;

  return (
    <CasesWrapper>
      <Card title={"Total Kasus"} number={totalCases} />
      <Card title={"Kasus Aktif"} number={activeCases} />
      <Card title={"Total Sembuh"} number={totalRecover} />
      <Card title={"Total Kematian"} number={totalDeath} />
    </CasesWrapper>
  );
};

export default Index;
