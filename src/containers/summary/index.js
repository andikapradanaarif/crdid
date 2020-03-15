import React, { useState, useEffect } from "react";
import { SummaryWrapper } from "./style";
import { Table, Text, Wrapper } from "../../components";
import { TimeFormatter } from "../../utils/timeParser";
import { csv } from "d3-fetch";

const Index = () => {
  const [patient, setPatient] = useState([]);

  useEffect(() => {
    csv("/data/patient.csv").then(data => {
      setPatient(data);
    });
  }, []);
  if (patient.length > 0) {
    const dataPatient = patient.reverse();
    const genders = ["-", "Wanita", "Pria"];
    const columns = [
      {
        title: "Kasus",
        dataIndex: "id",
        key: "id",
        render: text => "#" + text
      },
      {
        title: "Tanggal",
        width: 200,
        dataIndex: "date",
        sorter: (a, b) => a.time - b.time,
        key: "date",
        render: text => {
          const timeFormatted = TimeFormatter(text);
          return `${timeFormatted.dayName}, ${timeFormatted.date} ${timeFormatted.monthName} ${timeFormatted.year}`;
        },
        sortDirections: ["descend"]
      },
      {
        title: "Usia",
        dataIndex: "age",
        key: "age"
      },
      {
        title: "Gender",
        dataIndex: "sex",
        key: "sex",
        render: text => genders[text]
      },
      {
        title: "Kota",
        dataIndex: "city",
        sorter: (a, b) => a.time - b.time,
        key: "city",
        sortDirections: ["descend"]
      },
      {
        title: "Sumber",
        dataIndex: "url",
        key: "url",
        render: text => {
          return (
            <a href={text} target="_blank" rel="noopener noreferrer">
              {text.slice(0, 30)}...
            </a>
          );
        }
      }
    ];
    return (
      <SummaryWrapper>
        <Wrapper>
          <Text.Header>Summary</Text.Header>
          <Table
            columns={columns}
            dataSource={dataPatient}
            size={"middle"}
            rowKey={record => record.id}
            scroll={{ x: "max-content" }}
          />
        </Wrapper>
      </SummaryWrapper>
    );
  } else return <div />;
};

export default Index;
