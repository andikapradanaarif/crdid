import React from 'react';
import { TopHeaderWrapper } from './style';
import { CenterLayout } from '../';
import { Icon } from 'antd';
import { useHistory } from 'react-router';

const TopHeader = props => {
  const history = useHistory();
  const onPreviousPage = () => {
    history.goBack();
  };
  return (
    <TopHeaderWrapper className={'component_top_header'}>
      <CenterLayout
        width={'80%'}
        className={'component_top_header_center_layout'}
      >
        <div
          className="component_top_header_icon"
          onClick={props.onBack === undefined ? onPreviousPage : props.onBack}
        >
          {props.icon === undefined ? <Icon type="arrow-left" /> : props.icon}
        </div>
        <div className="component_top_header_title">{props.title}</div>
        <div
          className="component_top_header_right_btn"
          onClick={props.onClickRigthBtn}
        >
          {props.topRightBtn}
        </div>
      </CenterLayout>
    </TopHeaderWrapper>
  );
};

export { TopHeader };
