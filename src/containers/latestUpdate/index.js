import React from "react";
import { LatestUpdateWrapper } from "./style";
import { Text } from "../../components";
import { Timeline } from "antd";
import data from "../../datasets/logCase";
import { TimeFormatter } from "../../utils/timeParser";

const Index = props => {
  const timeLineItemsRendered = data.map((item, i) => {
    const timeFormatted = TimeFormatter(item.date);
    const dateFormatted = `${timeFormatted.dayName}, ${timeFormatted.date} ${timeFormatted.monthName} ${timeFormatted.year}`;
    return (
      <Timeline.Item key={i} color="#e3e300">
        <p>
          {dateFormatted}&nbsp;
          <strong>
            {item.newCase} new case{item.newCase > 1 && "s"}
          </strong>
        </p>
        <p className="container_status">status: {item.close}</p>
      </Timeline.Item>
    );
  });
  return (
    <LatestUpdateWrapper>
      <Text.Header>Latest Update</Text.Header>
      <div className="container_timeline">
        <Timeline mode="alternate">{timeLineItemsRendered}</Timeline>
      </div>
    </LatestUpdateWrapper>
  );
};

export default Index;
