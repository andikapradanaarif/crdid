import styled from "styled-components";

export const DescriptionWrapper = styled.div`
  .ant-tabs-nav .ant-tabs-tab:hover,
  .ant-tabs-nav .ant-tabs-tab-active {
    color: rgba(0, 0, 0, 0.84);
  }
  .ant-tabs-nav {
    font-size: 18px;
  }
  .ant-tabs-nav .ant-tabs-tab-active {
    font-weight: bold;
  }
  .ant-tabs-ink-bar {
    background-color: var(--primary);
  }
  .ant-tabs-tabpane {
    font-size: 16px;
    line-height: 150%;
    text-align: justify;
  }
  strong {
    font-weight: 700;
    color: var(--primary);
    /* font-family: serif; */
  }
  p {
    font-family: sans-serif;
  }
`;
