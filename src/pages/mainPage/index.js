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
        <Summary />
        <LatestUpdate />
        <News />
      </CenterLayout>
      <FreeSpace />
    </React.Fragment>
  );
}

export default index;
