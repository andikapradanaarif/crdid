import React from "react";
import { HeaderWrapper } from "./style";
import { CenterLayout, Header } from "../../components";

const Index = props => {
  return (
    <HeaderWrapper>
      <Header />
      <CenterLayout className="component_content">
        {props.children}
      </CenterLayout>
    </HeaderWrapper>
  );
};

export default Index;
