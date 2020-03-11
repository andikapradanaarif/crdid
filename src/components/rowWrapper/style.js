import styled from "styled-components";

export const WrapperStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  /* grid-row-gap: 20px; */

  @media (max-width: 850px) {
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 20px;
  }
`;
