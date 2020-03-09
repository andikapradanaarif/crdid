import React from "react";
import { CasesWrapper } from "./style";
import { Case, CaseCard } from "../../components";

const Index = props => {
  return (
    <CasesWrapper>
      <div className={"container_row"}>
        <Case title={"Coronavirus Cases:"} amount={10000} />
        <Case title={"Deaths:"} amount={10000} className={"container_deaths"} />
        <Case
          title={"Recovered:"}
          amount={10000}
          className={"container_recovered"}
        />
      </div>
      <div className={"container_card_row"}>
        <CaseCard
          title={" Active Cases "}
          highlightedAmount={1000}
          highlightedDescription={"Currently Infected Patients"}
        />
        <CaseCard
          title={" Active Cases "}
          highlightedAmount={1000}
          highlightedDescription={"Currently Infected Patients"}
        />
      </div>
    </CasesWrapper>
  );
};

export default Index;
