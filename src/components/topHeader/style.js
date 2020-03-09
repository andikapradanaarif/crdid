import styled from 'styled-components';

export const TopHeaderWrapper = styled.div`
  background-color: var(--white-two);
  padding: 14px 0;
  text-align: center;

  .component_top_header_center_layout {
    position: relative;
  }

  .component_top_header_icon {
    position: absolute;
    left: 0;
    font-weight: 600;
    color: var(--pinkish-grey);
    cursor: pointer;
  }

  .component_top_header_right_btn {
    position: absolute;
    top: 0;
    right: 0;
    display: inline-block;
    cursor: pointer;
    font-size: 14px;
    line-height: 19px;
    color: var(--dark-green);

    a {
      color: var(--dark-green);
    }
  }

  .component_top_header_title {
    font-size: 16px;
    color: var(--black-full);
    font-weight: 600;
  }
`;
