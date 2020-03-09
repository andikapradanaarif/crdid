import styled from 'styled-components';

export const FooterWrapper = styled.div`
  color: var(--white-two);
  font-size: 16px;
  line-height: 150%;

  img {
    width: 40%;
  }

  .component_footer_content {
    background-color: var(--bg);
    padding: 60px 0;
  }

  .component_center_layout {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .component_footer_left {
    display: flex;
    width: 50%;
    align-items: center;
  }

  .component_footer_text {
    margin-left: 30px;
    line-height: 150%;
  }

  .component_footer_title {
    margin-bottom: 15px;
    font-size: 24px;
  }

  .component_button {
    font-size: 24px;
    line-height: 150%;

    button {
      padding: 14px 40px;
    }
  }

  .component_footer_credit {
    font-size: 18px;
    line-height: 150%;
    padding: 13px 0;
    background-color: var(--black-two);
    text-align: center;
  }

  @media screen and (max-width: 973px) {
    img {
      display: none;
    }
  }

  @media screen and (max-width: 648px) {
    .component_center_layout {
      display: flex;
      flex-direction: column;
    }
    .component_button {
      margin-top: 30px;
    }
    .component_footer_left {
      width: 100%;
    }
    .component_footer_text {
      margin-left: 0px;
      width: 100%;
    }
  }
`;
