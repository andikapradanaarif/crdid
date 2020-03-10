import React from "react";
import { TextWrapper } from "./style";

const Header = props => {
  return (
    <TextWrapper className={props.className}>
      <h2>{props.children}</h2>
    </TextWrapper>
  );
};

export default {
  Header
};
