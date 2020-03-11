import React from "react";
import { SummaryWrapper } from "./style";
import { Text, Wrapper } from "../../components";
import data from "../../datasets/logCase";
import Chart from "react-apexcharts";

const Index = props => {
  const sortedDate = data.sort((a, b) => {
    return new Date(a.date) - new Date(b.date);
  });

  let firstDate = new Date(sortedDate[0].date);
  let yDate = new Date(sortedDate[0].date);
  const lastDate = new Date();
  const longTimeCase =
    Math.ceil((lastDate - firstDate) / (1000 * 3600 * 24)) + 2;

  const listDate = [...Array(longTimeCase).keys()];
  yDate.setDate(yDate.getDate() - 3);
  firstDate.setDate(firstDate.getDate() - 3);
  let totalCase = 0;
  let dataIndex = 0;

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
        let newDate = new Date(data?.[dataIndex]?.date);
        //console.log(i, newDate, dataIndex);
        newDate.setDate(newDate.getDate() - 1);
        yDate.setDate(yDate.getDate() + 1);

        if (
          newDate.getDate() === yDate.getDate() &&
          newDate.getMonth() === yDate.getMonth()
        ) {
          totalCase = totalCase + data?.[dataIndex]?.newCase;
          // console.log(data[dataIndex].newCase, dataIndex);
          dataIndex = dataIndex + 1;
          // console.log(i, newDate.getDate(), yDate.getDate());
        }
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
