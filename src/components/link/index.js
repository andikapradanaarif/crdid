import React from 'react';
import { LinkWrapper } from './style';
import { Link } from 'react-router-dom';

const Index = props => {
  return (
    <LinkWrapper>
      <strong>
        <Link to={props.linkTo ? props.linkTo : ''}>{props.children}</Link>
      </strong>
    </LinkWrapper>
  );
};

export default Index;
