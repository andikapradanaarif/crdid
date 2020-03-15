import React from "react";
import { HeaderWrapper } from "./style";
import { CenterLayout } from "../";
// import { Affix } from "antd";
// import image from "../../assets/img";

const Index = () => {
  return (
    <HeaderWrapper>
      <CenterLayout className="container_header_wrapper">
        <h1>
          Info<strong>Corona</strong> Indonesia
        </h1>
        <div className="container_header_menus">
          <a href="#description">Covid-19</a>
          <a href="#refferalHospitals">Rumah Sakit</a>
          <a href="#news">Berita</a>
          <a href="#summary">Summary</a>
        </div>
      </CenterLayout>
    </HeaderWrapper>
  );
};

export default Index;
