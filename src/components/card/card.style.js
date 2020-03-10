import styled from 'styled-components';

export const CardWrapper = styled.div`
  .ant-card {
    border-radius: 6px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  }

  .ant-card-head-title {
    white-space: pre-wrap;
  }

  .ant-card-head {
    border-bottom: none;
  }

  .ant-card-body {
    padding-top: 28px;
  }

  .ant-card-head-title {
    font-size: 18px;
    line-height: 26px;
    font-weight: bold;
    color: var(--dark-grey);
  }
`;
