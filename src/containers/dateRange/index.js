import React, { useState } from "react";
import { DateRangeWrapper } from "./style";
import { Wrapper, Text } from "../../components";
import { Slider } from "antd";

const Index = props => {
  const { children } = props;
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const childrenComponent = React.Children.map(children, child =>
    React.cloneElement(child, {
      startDate: startDate,
      endDate: endDate
    })
  );
  console.log(new Date().getDate() + 1);
  return (
    <DateRangeWrapper>
      {/* <Wrapper>
        <Text.Header>
          <div>Rentang Waktu</div>
        </Text.Header> */}
      {/* <div className="container_dateRange_wrapper"> */}
      {/* <Slider range defaultValue={[0, 100]} /> */}
      {/* </div> */}
      {/* </Wrapper> */}
      {childrenComponent}
    </DateRangeWrapper>
  );
};

export default Index;
