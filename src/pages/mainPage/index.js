import React from "react";
import { Header, Description, Cases } from "../../containers";
import { FreeSpace } from "../../components";

function index(props) {
  return (
    <React.Fragment>
      <Header>
        <Description />
        <Cases />
        <FreeSpace />
      </Header>
    </React.Fragment>
  );
}

export default index;
