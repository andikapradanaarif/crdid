import styled from "styled-components";

export const CasesWrapper = styled.div`
  margin-top: 30px;
  .container_deaths .component_amount {
    color: #696969;
  }
  .container_recovered .component_amount {
    color: var(--primary);
  }
  .container_row {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-bottom: 50px;
  }
  .container_card_row {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
`;
