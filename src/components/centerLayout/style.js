import styled from "styled-components";

export const CenterLayoutStyle = styled.div`
  max-width: ${props => (props.width === undefined ? "70%" : props.width)};
  margin: auto;

  @media screen and (min-width: 2000px) {
    max-width: ${props => (props.width === undefined ? "1172px" : props.width)};
  }
`;
