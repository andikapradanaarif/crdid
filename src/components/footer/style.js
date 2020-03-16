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
        height: 40px;
        margin-right: 15px;
        margin-bottom: 15px;
      }
    }
    .component_footer_right {
      p {
        font-size: 14px;
      }
      img {
        height: 35px;
        margin-right: 10px;
    }
  }
`;
