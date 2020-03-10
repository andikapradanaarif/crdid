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
    color: rgba(0, 0, 0, 0.85);
  }

  .container_title {
    text-transform: capitalize;
  }

  .container_status {
    margin-top: 10px;
    display: block;

    li {
      margin-left: -15px;
    }
  }
`;
