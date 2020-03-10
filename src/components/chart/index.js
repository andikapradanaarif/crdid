import React from "react";
import { CaseWrapper } from "./style";
import { Card } from "antd";
// import { Chart } from "react-charts";

const Index = props => {
  // const series = React.useMemo(
  //   () => ({
  //     showPoints: false
  //   }),
  //   []
  // );
  // const axes = React.useMemo(
  //   () => [
  //     { primary: true, type: "time", position: "bottom" },
  //     { type: "linear", position: "left" }
  //   ],
  //   []
  // );
  return (
    <CaseWrapper className={props.className}>
      <div className={props.isActive && "component_case_card_active"}>
        <Card title={props.title} style={{ width: 300 }} bordered={true}>
          {/* <Chart series={series} axes={axes} tooltip data={[1, 2, 3]} /> */}
        </Card>
      </div>
    </CaseWrapper>
  );
};

export default Index;
