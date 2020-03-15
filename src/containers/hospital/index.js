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
        <Text.Header id="refferalHospitals">Rumah Sakit Rujukan</Text.Header>
        <div className="container_hospital_content">
          <div className="container_hospital_word">
            <p>
              Apakah anda mengalami gejala-gejala Covid-19? Segera periksakan di
              Rumah Sakit rujukan pemerintah
            </p>
          </div>
          <div className="container_hospital_form_search">
            <Select
              showSearch
              style={{ width: "100%", minWidth: 200 }}
              placeholder="Pilih Provinsi"
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
};

export default Index;
