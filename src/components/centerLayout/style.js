import styled from "styled-components";

export const CenterLayoutStyle = styled.div`
  width: ${props => (props.width === undefined ? "85%" : props.width)};
  margin: auto;
  max-width: 1200px;

  @media screen and (min-width: 2000px) {
    max-width: ${props => (props.width === undefined ? "1172px" : props.width)};
  }
`;
