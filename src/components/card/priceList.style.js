import styled from 'styled-components';

export const PriceListWrapper = styled.div`
  margin-top: 46px;
  .ant-card {
    width: 292px;
    height: 100%;
  }

  .component_price_list_image {
    min-height: 154px;
  }

  .component_price_list_price {
    margin-top: 20px;
    color: var(--black-two);
    font-size: 24px;
    line-height: 150%;
    font-weight: bold;

    span {
      font-size: 18px;
    }
  }

  .ant-card-body {
    height: 100%;
  }

  .component_button {
    margin-top: 25px;
    margin-bottom: 12px;
  }

  .component_price_list_req {
    margin-top: 10px;
    color: var(--grey);
    font-size: 18px;
    font-weight: bold;
    line-height: 150%;

    span {
      color: var(--dark-sea-green);
    }
  }

  .component_price_list_desc {
    font-size: 14px;
    line-height: 150%;
    color: var(--mid-grey);
  }
`;
