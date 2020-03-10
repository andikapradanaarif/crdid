import React from 'react';
import { AdvantageWrapper } from './advantage.style';
import { PriceListWrapper } from './priceList.style';
import { CardWrapper } from './card.style';
import { Card } from 'antd';
import { ToPrice } from '../../utils/converter';
import { Button } from '../';

const Advantage = props => {
  return (
    <AdvantageWrapper>
      <div className="component_advantage_image">
        <img src={props.img} alt={`${props.title} desc`} />
      </div>
      <div className="component_advantage_title">{props.title}</div>
      <div className="component_advantage_description">{props.children}</div>
    </AdvantageWrapper>
  );
};

const PriceList = props => {
  return (
    <PriceListWrapper className="component_price_list">
      <Card title={props.title}>
        <div className="component_price_list_image">
          <img src={props.img} alt={`${props.title} desc`} />
        </div>
        <div className="component_price_list_price">
          <span>Rp. </span>
          {ToPrice(props.price, '')} -
        </div>
        <div className="component_price_list_req">
          <span>{ToPrice(props.request, '')}</span> Requests
        </div>
        <Button text={'Pilih Paket'} onClick={props.onClick} />
        <div className="component_price_list_desc">
          Tidak ada sistem hangus <br />
          Tanpa Kartu Kredit
        </div>
      </Card>
    </PriceListWrapper>
  );
};

const Box = props => {
  return (
    <CardWrapper>
      <Card title={props.title}>{props.children}</Card>
    </CardWrapper>
  );
};

export default { Advantage, PriceList, Box };
