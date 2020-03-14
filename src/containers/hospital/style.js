import styled from "styled-components";

export const SummaryWrapper = styled.div`
  margin-top: 30px;
  /* 
  h3 {
    font-size: 20px;
    text-align: center;
  } */
  .container_hospital_content {
    .container_hospital_word {
      display: inline-block;
      margin-right: 40px;
      width: 39%;
      min-width: 300px;
      @media (max-width: 700px) {
        width: 100%;
        min-width: 0px;
      }
      p {
        font-weight: 600;
        font-size: 17px;
      }
    }
    .container_hospital_form_search {
      margin-top: 5px;
      vertical-align: top;
      display: inline-block;
      width: 30%;
      @media (max-width: 700px) {
        width: 100%;
      }
      margin-bottom: 20px;
      .ant-select {
        height: 50px;
      }
    }
  }
`;
