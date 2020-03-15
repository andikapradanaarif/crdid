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
          <a href="#description">Apa itu Covid-19</a>
          <a href="#refferalHospitals">Rumah Sakit Rujukan</a>
          <a href="#news">Berita Terbaru</a>
        </div>
      </CenterLayout>
    </HeaderWrapper>
  );
};

export default Index;
