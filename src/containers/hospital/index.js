import React, { useState, useEffect } from "react";
import { SummaryWrapper } from "./style";
import { Table, Text, Wrapper } from "../../components";
import { csv } from "d3-fetch";
import { Select } from "antd";

const { Option } = Select;

const Index = () => {
  const [hospitals, setHospitals] = useState([]);
  const [supportedProvince, setSupportedProvince] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");

  useEffect(() => {
    csv("/data/daftarRS.csv").then(data => {
      setHospitals(data);
      setSupportedProvince([...new Set(data.map(item => item["Provinsi"]))]);
    });
  }, []);

  useEffect(() => {
    csv("/data/daftarRS.csv").then(data => {
      setHospitals(data.filter(item => item["Provinsi"] === selectedProvince));
    });
  }, [selectedProvince]);

  if (hospitals.length > 0) {
    const columns = [
      {
        title: "Provinsi",
        width: 130,
        dataIndex: "Provinsi",
        key: "Provinsi"
      },
      {
        title: "Nama Rumah Sakit",
        width: 200,
        dataIndex: "Nama Rumah Sakit",
        sorter: (a, b) => a.time - b.time,
        key: "Nama Rumah Sakit"
      },
      {
        title: "Alamat",
        dataIndex: "Alamat",
        key: "Alamat"
      },
      {
        title: "Lokasi",
        dataIndex: "Linkmaps",
        key: "Linkmaps",
        render: text => {
          return (
            <a href={text} target="_blank" rel="noopener noreferrer">
              {text.slice(0, 30)}...
            </a>
          );
        }
      }
    ];
    const optionRendered = supportedProvince.map((item, i) => {
      return (
        <Option value={item} key={i}>
          {item}
        </Option>
      );
    });
    return (
      <SummaryWrapper>
        <Wrapper>
          <Text.Header>Cari Rumah Sakit Rujukan</Text.Header>
          <div className="container_hospital_form_search">
            <Select
              showSearch
              style={{ width: 400 }}
              placeholder="Pilih Rumah Sakit Rujukan"
              optionFilterProp="children"
              onChange={value => setSelectedProvince(value)}
              filterOption={(input, option) =>
                option.props.value.toLowerCase().indexOf(input.toLowerCase()) >=
                0
              }
            >
              {optionRendered}
            </Select>
          </div>
          {selectedProvince !== "" && (
            <Table
              columns={columns}
              dataSource={hospitals}
              size={"middle"}
              rowKey={(_, i) => i}
              scroll={{ x: "max-content" }}
            />
          )}
        </Wrapper>
      </SummaryWrapper>
    );
  } else return <div />;
};

export default Index;
