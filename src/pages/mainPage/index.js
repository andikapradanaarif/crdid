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
import MetaTags from "react-meta-tags";

function index() {
  return (
    <div>
      <MetaTags>
        <title>InfoCorona indonesia</title>
        <meta
          name="description"
          content="Informasi terkini terkait virus corona dan penyebarannya di Indonesia"
        />
        <meta
          property="og:description"
          content="Informasi terkini terkait virus corona dan penyebarannya di Indonesia"
        />
        <meta property="og:title" content="InfoCorona Indonesia" />
        <meta
          property="og:image"
          content="https://photos.google.com/search/_tra_/photo/AF1QipMa9Jq6nVeTO8eTnD5hsz8xOR9_iI2zHB0dW7oe"
        />
      </MetaTags>
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
    </div>
  );
}

export default index;
