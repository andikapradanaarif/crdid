import React, { useState, useEffect } from "react";
import { LatestUpdateWrapper } from "./style";
import { Text, Wrapper, Button } from "../../components";
import { Timeline } from "antd";
import data from "../../datasets/logNews";
import { TimeFormatter } from "../../utils/timeParser";

const Index = () => {
  const [isShowAll, setIsShowAll] = useState(false);
  const [logNews, setLogNews] = useState([]);

  useEffect(() => {
    if (logNews.length > 0) setLogNews(isShowAll ? data : data.slice(0, 5));
    else setLogNews(data.reverse().slice(0, 5));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isShowAll]);

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
        <Text.Header id="news">Berita Terbaru </Text.Header>
        <div className="container_content">
          <Timeline>{timeLineItemsRendered}</Timeline>
        </div>
        <div className="container_button_wrapper">
          <Button
            text={isShowAll ? "Sembunyikan" : "Tampilkan Semua"}
            onClick={() => setIsShowAll(!isShowAll)}
          />
        </div>
      </Wrapper>
    </LatestUpdateWrapper>
  );
};

export default Index;
