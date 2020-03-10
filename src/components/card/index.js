import React from "react";
import { CardWrapper } from "./card.style";
import { Wrapper } from "../";

const Index = props => {
  return (
    <CardWrapper>
      <Wrapper className="component_card_wrapper">
        <h4>{props.title}</h4>
        <div>{props.children}</div>
      </Wrapper>
    </CardWrapper>
  );
};

export default Index;
