import React from "react";
import { SummaryWrapper } from "./style";
import { Table, Text, Wrapper } from "../../components";
import data from "../../datasets/patient";
import { TimeFormatter } from "../../utils/timeParser";

const Index = props => {
  const genders = ["-", "Wanita", "Pria"];
  const columns = [
    {
      title: "No",
      dataIndex: "id",
      key: "id"
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
          dataSource={data}
          size={"middle"}
          rowKey={record => record.id}
          scroll={{ x: "max-content" }}

          // pagination={false}
        />
      </Wrapper>
    </SummaryWrapper>
  );
};

export default Index;
