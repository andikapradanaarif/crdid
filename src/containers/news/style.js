import styled from "styled-components";

export const LatestUpdateWrapper = styled.div`
  margin-top: 30px;

  .container_timeline {
    padding-top: 30px;
    width: 80%;
    margin: auto;
    display: block;
  }

  a {
    color: var(--black);
  }
  p {
    margin-bottom: 5px;
  }
  .container_title {
    text-transform: capitalize;
  }

  .container_status {
    margin-top: 5px;
    display: block;

    li {
      margin-left: -15px;
      margin-bottom: 3px;
    }
  }
`;
