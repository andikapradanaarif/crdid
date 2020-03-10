import React from "react";
import { CasesWrapper } from "./style";
import { Case, CaseCard, Chart } from "../../components";

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
        <div>
          <CaseCard
            isActive={true}
            title={" Active Cases "}
            highlightedAmount={1000}
            highlightedDescription={"Currently Infected Patients"}
            leftHighlightedAmount={41444}
            leftHighlightedDescription={"in Mild Condition"}
            rightHighlightedAmount={6042}
            rightHighlightedDescription={"Serious or Critical"}
          />
          <Chart title={" Total Cases "} />
        </div>
        <div>
          <CaseCard
            title={" Closed Cases "}
            highlightedAmount={1000}
            highlightedDescription={"Currently Infected Patients"}
            leftHighlightedAmount={41444}
            leftHighlightedDescription={"in Mild Condition"}
            rightHighlightedAmount={6042}
            rightHighlightedDescription={"Serious or Critical"}
          />
          <Chart title={" Total Deaths "} />
        </div>
      </div>
    </CasesWrapper>
  );
};

export default Index;
