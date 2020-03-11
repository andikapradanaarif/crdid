import React from "react";
import {
  Description,
  Cases,
  Summary,
  LatestUpdate,
  News,
  GrowthCases,
  Genders,
  Age
} from "../../containers";
import { CenterLayout, Header, FreeSpace, Footer } from "../../components";

function index() {
  return (
    <React.Fragment>
      <Header />
      <CenterLayout>
        <Description />
        <Cases />
        <News />
        <Summary />
        <GrowthCases />
        <Genders />
        <Age />
      </CenterLayout>
      <FreeSpace />
      <Footer />
    </React.Fragment>
  );
}

export default index;
