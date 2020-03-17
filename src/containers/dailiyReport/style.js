import styled from "styled-components";

export const SummaryWrapper = styled.div`
  margin-top: 30px;
  .container_dailyReport_option {
    display: inline-block;
    cursor: pointer;
    padding: 0px 10px;
    /* font-size: 13px; */
    @media (max-width: 400px) {
      font-size: 11px;
    }
  }
  .container_dailyReport_option:hover {
    color: var(--primary);
  }
  .container_dailyReport_optionActive {
    color: var(--primary);
    font-weight: 700;
  }
`;
