import React, { useState, useEffect } from "react";
import { SummaryWrapper } from "./style";
import { Text, Wrapper } from "../../components";
import Chart from "react-apexcharts";
import { csv } from "d3-fetch";

const Index = () => {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    csv("/data/logCase.csv").then(data => {
      setCases(data);
    });
  }, []);

  if (cases.length > 0) {
    const sortedDate = cases.sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    });

    let firstDate = new Date(sortedDate?.[0]?.date);
    let newCaseDate = new Date(sortedDate?.[0]?.date);
    let newDeathDate = new Date(sortedDate?.[0]?.date);
    let newRecoverDate = new Date(sortedDate?.[0]?.date);

    const lastDate = new Date();
    const longTimeCase =
      Math.ceil((lastDate - firstDate) / (1000 * 3600 * 24)) + 2;

    const listDate = [...Array(longTimeCase).keys()];
    newCaseDate.setDate(newCaseDate.getDate() - 3);
    newDeathDate.setDate(newDeathDate.getDate() - 3);
    newRecoverDate.setDate(newRecoverDate.getDate() - 3);

    firstDate.setDate(firstDate.getDate() - 3);

    let newIndex = 0;
    let deathIndex = 0;
    let recoverIndex = 0;

    const options = {
      xaxis: {
        categories: listDate.map(x => {
          firstDate.setDate(firstDate.getDate() + 1);
          return `${firstDate.getDate()}/${firstDate.getMonth() + 1}/20`;
        })
      },
      colors: ["#117899", "#47B39C", "#f95d6a"]
    };
    const series = [
      {
        name: "Kasus Baru",
        data: listDate.map((i, id) => {
          let newDate = new Date(cases?.[newIndex]?.date);
          //console.log(i, newDate, dataIndex);
          newDate.setDate(newDate.getDate() - 1);
          newCaseDate.setDate(newCaseDate.getDate() + 1);

          if (
            newDate.getDate() === newCaseDate.getDate() &&
            newDate.getMonth() === newCaseDate.getMonth()
          ) {
            newIndex = newIndex + 1;
            return parseInt(cases?.[newIndex - 1]?.newCase);
          }
          return 0;
        })
      },
      {
        name: "sembuh",
        data: listDate.map((i, id) => {
          let newDate = new Date(cases?.[recoverIndex]?.date);
          //console.log(i, newDate, dataIndex);
          newDate.setDate(newDate.getDate() - 1);
          newRecoverDate.setDate(newRecoverDate.getDate() + 1);

          if (
            newDate.getDate() === newRecoverDate.getDate() &&
            newDate.getMonth() === newRecoverDate.getMonth()
          ) {
            recoverIndex = recoverIndex + 1;
            return parseInt(cases?.[recoverIndex - 1]?.recover);
          }
          return 0;
        })
      },
      {
        name: "kematian",
        data: listDate.map((i, id) => {
          let newDate = new Date(cases?.[deathIndex]?.date);
          //console.log(i, newDate, dataIndex);
          newDate.setDate(newDate.getDate() - 1);
          newDeathDate.setDate(newDeathDate.getDate() + 1);

          if (
            newDate.getDate() === newDeathDate.getDate() &&
            newDate.getMonth() === newDeathDate.getMonth()
          ) {
            deathIndex = deathIndex + 1;
            return parseInt(cases?.[deathIndex - 1]?.death);
          }
          return 0;
        })
      }
    ];
    return (
      <SummaryWrapper>
        <Wrapper>
          <Text.Header>Grafik Harian Kasus</Text.Header>
          <Chart options={options} series={series} type="bar" height={300} />
        </Wrapper>
      </SummaryWrapper>
    );
  } else return <div />;
};

export default Index;
