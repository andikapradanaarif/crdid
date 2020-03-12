import React, { useEffect, useState } from "react";
import { SummaryWrapper } from "./style";
import { Text, Wrapper, RowWrapper, Table } from "../../components";
import Chart from "react-apexcharts";
import { csv } from "d3-fetch";
// male = 2 , female = 1 , unknown 0
const Index = () => {
  const [patient, setPatient] = useState([]);

  useEffect(() => {
    csv("/data/patient.csv").then(data => {
      setPatient(data);
    });
  }, []);
  if (patient.length > 0) {
    const agePatients = [
      ...new Set(patient.map(item => Math.floor(item.age / 10)))
    ].sort();
    let patients = [];
    for (let index = 0; index < agePatients.length; index++) {
      patients.push({ id: index, age: agePatients[index], total: 0 });
    }
    for (let index = 0; index < patient.length; index++) {
      const age = Math.floor(patient[index].age / 10);
      patients.filter(item => item.age === age)[0].total++;
    }
    const columns = [
      {
        title: "No",
        dataIndex: "id",
        key: "id",
        render: text => text + 1,
        width: 50
      },
      {
        title: "Usia",
        dataIndex: "age",
        key: "age",
        render: text => `${text}0-${text}9 tahun`
      },
      {
        title: "Persentase",
        dataIndex: "total",
        key: "total",
        render: text => (
          <strong>{((text / patient.length) * 100).toFixed(1) + " %"}</strong>
        )
      }
    ];
    const series = patients.map(item => item.total);
    const options = {
      labels: patients.map(item => `${item.age}0-${item.age}9 tahun`),
      colors: [
        "#A2B86C",
        "#117899",
        "#fbc02d",
        "#47B39C",
        "#f95d6a",
        "#73B1DE",
        "#665191",
        "#34495e"
      ],
      responsive: [
        {
          breakpoint: 460,
          options: {
            legend: {
              position: "bottom"
            },
            chart: {
              height: 350
            }
          }
        }
      ]
    };
    return (
      <SummaryWrapper>
        <RowWrapper>
          <Wrapper className="container_age_table">
            <Text.Header>Tabel Usia</Text.Header>
            <Table
              columns={columns}
              dataSource={patients}
              size={"small"}
              rowKey={record => record.id}
              pagination={false}
            />
          </Wrapper>
          <Wrapper className="container_age_chart">
            <Text.Header>Grafik Usia</Text.Header>
            <Chart options={options} series={series} type="pie" height={230} />
          </Wrapper>
        </RowWrapper>
      </SummaryWrapper>
    );
  } else return <div />;
};

export default Index;
