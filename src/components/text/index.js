import React from "react";
import { TextWrapper } from "./style";

const Header = props => {
  return (
    <TextWrapper className={props.className}>
      <h3>{props.children}</h3>
    </TextWrapper>
  );
};

export default {
  Header
};
