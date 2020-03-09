import React from 'react';
import { TextWrapper } from './style';

const Text = props => {
  return (
    <TextWrapper className={props.className}>{props.children}</TextWrapper>
  );
};

const JumboTron = props => {
  return (
    <TextWrapper className={props.className}>
      <div className="component_jumbo_tron">{props.children}</div>
    </TextWrapper>
  );
};

const Strong = props => {
  return (
    <TextWrapper className={props.className}>
      <div className="component_text_strong">{props.children}</div>
    </TextWrapper>
  );
};

const TextCenter = props => {
  return (
    <Text className={props.className}>
      <div className="component_text_center">{props.children}</div>
    </Text>
  );
};

const Description = props => {
  return (
    <Text>
      <div className="component_text_description">{props.children}</div>
    </Text>
  );
};

export default {
  TextCenter,
  Text,
  JumboTron,
  Strong,
  Description
};
