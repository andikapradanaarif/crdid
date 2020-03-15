import React from "react";
import {
  Description,
  Cases,
  Summary,
  Hospital,
  News,
  GrowthCases,
  DailyReport,
  Genders,
  Age,
  DateRange
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
        <DailyReport />
        <DateRange>
          <Genders />
          <Age />
        </DateRange>
      </CenterLayout>
      <FreeSpace />
      <Footer />
    </React.Fragment>
  );
}

export default index;
