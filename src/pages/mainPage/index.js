import React from "react";
import {
  Description,
  Cases,
  Summary,
  Hospital,
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
        <Cases />
        <Description />
        <Hospital />
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
