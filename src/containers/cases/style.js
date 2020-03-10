import styled from "styled-components";

export const CasesWrapper = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 20px;
  @media (max-width: 908px) {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 20px;
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
