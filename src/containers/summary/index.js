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
      title: "Date",
      dataIndex: "date",
      sorter: (a, b) => a.time - b.time,
      key: "date",
      render: text => {
        const timeFormatted = TimeFormatter(text);
        return `${timeFormatted.dayName}, ${timeFormatted.date} ${timeFormatted.monthName} ${timeFormatted.year}`;
      },
      width: 200,
      sortDirections: ["descend"]
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age"
    },
    {
      title: "Sex",
      dataIndex: "sex",
      key: "sex",
      render: text => genders[text]
    },
    {
      title: "City",
      dataIndex: "city",
      sorter: (a, b) => a.time - b.time,
      key: "city",
      sortDirections: ["descend"]
    },
    {
      title: "Source",
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
          scroll={{ xScroll: 400 }}
          size={"small"}
          rowKey={record => record.id}
        />
        <Text.Header>Pertumbuhan Kasus</Text.Header>
        <div className="container_summary_growth"></div>
      </Wrapper>
    </SummaryWrapper>
  );
};

export default Index;
