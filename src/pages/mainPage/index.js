import React from "react";
import {
  Description,
  Cases,
  Summary,
  LatestUpdate,
  News
} from "../../containers";
import { CenterLayout, Header, FreeSpace } from "../../components";

function index() {
  return (
    <React.Fragment>
      <Header />
      <CenterLayout>
        <Description />
        {/* <Cases /> */}
        <News />
        <Summary />
        <LatestUpdate />
      </CenterLayout>
      <FreeSpace />
    </React.Fragment>
  );
}

export default index;
