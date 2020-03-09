import React from 'react';
import { FooterWrapper } from './style';
import { CenterLayout, Button } from '../';
// import { Button } from '../';

const Index = props => {
  return (
    <FooterWrapper>
      <div className="component_footer_content">
        <CenterLayout>
          <div className="component_footer_left">
            <img src={props.img} alt="" />
            <div className="component_footer_text">
              <div className="component_footer_title">{props.title}</div>
              <div className="component_footer_description">
                {props.children}
              </div>
            </div>
          </div>
          <Button text={'Hubungi Kami 👋'} onClick={props.onClick} />
        </CenterLayout>
      </div>
      <div className="component_footer_credit">{props.credit}</div>
    </FooterWrapper>
  );
};

export default Index;
