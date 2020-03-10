import React from "react";
import { CaseWrapper } from "./style";
import { ToPrice } from "../../utils/converter";

const Index = props => {
  return (
    <CaseWrapper>
      <h4>{props.title}</h4>
      <div className="component_amount">{ToPrice(props.amount, "")}</div>
    </CaseWrapper>
  );
};

export default Index;
