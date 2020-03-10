import React from "react";
import { CardWrapper } from "./card.style";
import { Wrapper } from "../";

const Index = props => {
  const { title, number } = props;
  return (
    <CardWrapper className={props.className}>
      <Wrapper className="component_card_wrapper">
        <h1>{number}</h1>
        <h2>{title}</h2>
      </Wrapper>
    </CardWrapper>
  );
};

export default Index;
