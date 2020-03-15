import styled from "styled-components";

export const HeaderWrapper = styled.div`
  background-color: var(--primary);
  font-weight: bold;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 4px 12px 0px;
  padding: 5px 0px;
  padding-top: 15px;
  width: 100%;
  z-index: 10;
  h1 {
    font-size: 18px;
    border-left: 2px solid var(--white);
    padding-left: 8px;
    color: var(--white);
  }

  strong {
    color: var(--white);
  }

  .container_header_wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }

  .container_header_menus {
    a {
      padding: 0px 5px;

      padding-bottom: 5px;
      color: var(--white);
      margin-right: 15px;
      display: inline-block;
      font-weight: 500;
    }
    a:hover {
      border-bottom: 3px solid #fff;
    }
  }
`;
