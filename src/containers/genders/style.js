import styled from "styled-components";

export const SummaryWrapper = styled.div`
  margin-top: 30px;

  .container_gender_content {
    /* width: 563px; */
  }
  .container_gender_chart {
    min-width: 400px;
    @media (max-width: 850px) {
      min-width: 0px;
    }
    /* width: 563px; */
  }
`;
