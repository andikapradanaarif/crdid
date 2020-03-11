import React from "react";
import { FooterWrapper } from "./style";
import { CenterLayout } from "../";
// import { Button } from '../';

const Index = props => {
  return (
    <FooterWrapper>
      <div className="component_footer_content">
        <CenterLayout>
          <p>information and support, email us infocorona.id@gmail.com</p>
        </CenterLayout>
      </div>
    </FooterWrapper>
  );
};

export default Index;
