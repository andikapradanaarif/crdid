import React from "react";
import { SummaryWrapper } from "./style";
import { Text, Wrapper, RowWrapper, Table } from "../../components";
import data from "../../datasets/patient";
import Chart from "react-apexcharts";

const Index = props => {
  const genders = ["Tidak Diketahui", "Wanita", "Pria"];
  const sexPatients = [...new Set(data.map(item => item.sex))];
  let patients = [];
  for (let index = 0; index < sexPatients.length; index++) {
    patients.push({ id: index, sex: sexPatients[index], total: 0 });
  }
  for (let index = 0; index < data.length; index++) {
    patients[sexPatients[data[index].sex]].total++;
  }
  let tmp = patients[1];
  patients[1] = patients[2];
  patients[2] = tmp;
  const columns = [
    {
      title: "No",
      dataIndex: "id",
      key: "id",
      render: text => text + 1,
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
        <strong>{((text / data.length) * 100).toFixed(1) + " %"}</strong>
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
};

export default Index;
