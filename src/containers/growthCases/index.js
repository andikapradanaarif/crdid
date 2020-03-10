import React from "react";
import { SummaryWrapper } from "./style";
import { Text, Wrapper } from "../../components";
import data from "../../datasets/logCase";
import { TimeFormatter } from "../../utils/timeParser";
import Chart from "react-apexcharts";

const Index = props => {
  const options = {
    xaxis: {
      categories: data.map(x => {
        const timeFormatted = TimeFormatter(x.date);
        return `${timeFormatted.dayName}, ${timeFormatted.date} ${timeFormatted.monthName} ${timeFormatted.year}`;
      })
    }
  };
  const series = [
    {
      name: "Total Kasus",
      data: data.map(
        (item, i, array) =>
          (array[i].newCase += array[i - 1]?.newCase
            ? array[i - 1]?.newCase
            : 0)
      )
    }
  ];
  return (
    <SummaryWrapper>
      <Wrapper>
        <Text.Header>Pertumbuhan Kasus</Text.Header>
        <Chart options={options} series={series} type="line" />
      </Wrapper>
    </SummaryWrapper>
  );
};

export default Index;
