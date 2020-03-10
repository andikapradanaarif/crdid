import React from "react";
import { TableWrapper } from "./style";
import { Table } from "antd";

const index = props => {
  return (
    <TableWrapper>
      <Table {...props} />
    </TableWrapper>
  );
};

export default index;
