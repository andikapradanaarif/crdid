import React from "react";
import { Header, Description, Cases, Summary } from "../../containers";
import { FreeSpace } from "../../components";

function index(props) {
  return (
    <React.Fragment>
      <Header>
        <Description />
        <Cases />
        <Summary />
        <FreeSpace />
      </Header>
    </React.Fragment>
  );
}

export default index;
