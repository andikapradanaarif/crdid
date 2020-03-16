import styled from "styled-components";

export const FooterWrapper = styled.div`
  background-color: var(--primary);
  color: var(--white);

  .component_footer_content {
    padding-top: 15px;
    padding-bottom: 20px;
    .component_footer_contributor {
      p {
        font-size: 14px;
      }
      img {
        height: 35px;
        margin-right: 10px;
        margin-bottom: 15px;
      }
    }
    .component_footer_right {
      p {
        text-align: right;
        font-size: 16px;
        font-weight: 600px;
      }
    }
  }
`;
