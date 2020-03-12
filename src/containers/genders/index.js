import React, { useState, useEffect } from "react";
import { SummaryWrapper } from "./style";
import { Text, Wrapper, RowWrapper, Table } from "../../components";
import Chart from "react-apexcharts";
import { csv } from "d3-fetch";
// male = 2 , female = 1 , unknown 0
const Index = props => {
  const [patient, setPatient] = useState([]);

  useEffect(() => {
    csv("/data/patient.csv").then(data => {
      setPatient(data);
    });
  }, []);

  if (patient.length > 0) {
    const genders = ["Tidak Diketahui", "Wanita", "Pria"];

    const male = patient.filter(i => {
      return i.sex === "2";
    }).length;
    const female = patient.filter(i => {
      return i.sex === "1";
    }).length;
    const unknown = patient.filter(i => {
      return i.sex === "0";
    }).length;

    const patients = [
      {
        id: 1,
        sex: 1,
        total: female
      },
      {
        id: 2,
        sex: 2,
        total: male
      },
      {
        id: 3,
        sex: 0,
        total: unknown
      }
    ];
    const columns = [
      {
        title: "No",
        dataIndex: "id",
        key: "id",
        width: 50
      },
      {
        title: "Gender",
        dataIndex: "sex",
        key: "sex",
        render: text => genders[text]
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
      labels: ["Wanita", "Pria", "Tidak Diketahui"],
      colors: ["#A2B86C", "#117899", "#fbc02d"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom"
            },
            chart: {
              height: 270
            }
          }
        }
      ]
    };
    return (
      <SummaryWrapper>
        <RowWrapper>
          <Wrapper className="container_gender_table">
            <Text.Header>Tabel Gender</Text.Header>
            <Table
              columns={columns}
              dataSource={patients}
              size={"small"}
              rowKey={record => record.id}
              pagination={false}
            />
          </Wrapper>
          <Wrapper className="container_gender_chart">
            <Text.Header>Grafik Gender</Text.Header>
            <Chart options={options} series={series} type="pie" height={200} />
          </Wrapper>
        </RowWrapper>
      </SummaryWrapper>
    );
  } else return <div />;
};

export default Index;
