import React from "react";
import { FooterWrapper } from "./style";
import { CenterLayout, Button } from "../";
// import { Button } from '../';

const Index = props => {
  return (
    <FooterWrapper>
      <div className="component_footer_content">
        <CenterLayout>
          <p>email us infocorona.id@gmail.com</p>
        </CenterLayout>
      </div>
    </FooterWrapper>
  );
};

export default Index;
