import styled from 'styled-components';

export const TextWrapper = styled.div`
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--bg);

  .component_text_description {
    color: var(--grey);
  }

  .component_text_center {
    text-align: center;
  }

  .component_text_strong {
    font-size: 24px;
    line-height: 150%;
  }

  .component_jumbo_tron {
    font-size: 30px;
    color: var(--white-two);
    font-weight: 500;
    line-height: 150%;
  }
`;
