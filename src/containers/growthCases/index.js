import React from "react";
import { SummaryWrapper } from "./style";
import { Text, Wrapper } from "../../components";
import data from "../../datasets/logCase";
import { TimeFormatter } from "../../utils/timeParser";
import Chart from "react-apexcharts";

const Index = props => {
  const sortedDate = data.sort((a, b) => {
    return new Date(a.date) - new Date(b.date);
  });

  let firstDate = new Date(sortedDate[0].date);
  const lastDate = new Date(sortedDate[sortedDate.length - 1].date);
  const longTimeCase = Math.ceil((lastDate - firstDate) / (1000 * 3600 * 24));
  const listDate = [...Array(longTimeCase).keys()];
  firstDate.setDate(firstDate.getDate() - 2);
  let totalCase = 0;
  const options = {
    xaxis: {
      categories: listDate.map(x => {
        firstDate.setDate(firstDate.getDate() + 1);
        return `${firstDate.getDate()}/${firstDate.getMonth() + 1}/20`;
      })
    }
  };
  const series = [
    {
      name: "Total Kasus",
      data: listDate.map(i => {
        console.log(i, data[i]);
        // const totalCase = data[i].newCase;
        return totalCase;
      })
    }
  ];
  return (
    <SummaryWrapper>
      <Wrapper>
        <Text.Header>Pertumbuhan Kasus</Text.Header>
        <Chart options={options} series={series} type="line" height={300} />
      </Wrapper>
    </SummaryWrapper>
  );
};

export default Index;
