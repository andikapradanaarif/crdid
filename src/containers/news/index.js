import React from "react";
import { LatestUpdateWrapper } from "./style";
import { Text, Wrapper } from "../../components";
import { Timeline } from "antd";
import data from "../../datasets/logNews";
import { TimeFormatter } from "../../utils/timeParser";

const Index = () => {
  const logNews = data.reverse();
  const timeLineItemsRendered = logNews.map((item, i) => {
    const timeFormatted = TimeFormatter(item.date);
    const dateFormatted = `${timeFormatted.dayName}, ${timeFormatted.date} ${timeFormatted.monthName} ${timeFormatted.year}`;
    const activityRendered = item.activity.map((item, i) => {
      return (
        <li key={i}>
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            <strong className="container_title">{item.title}</strong>
          </a>
          {item.desc && <p>{item.desc}</p>}
        </li>
      );
    });

    return (
      <Timeline.Item key={i}>
        {dateFormatted}&nbsp;
        <ul className="container_status">{activityRendered}</ul>
      </Timeline.Item>
    );
  });
  return (
    <LatestUpdateWrapper>
      <Wrapper>
        <Text.Header>News</Text.Header>
        <div className="container_content">
          <Timeline>{timeLineItemsRendered}</Timeline>
        </div>
      </Wrapper>
    </LatestUpdateWrapper>
  );
};

export default Index;
