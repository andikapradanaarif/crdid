import styled from 'styled-components';

export const FormInputWrapper = styled.div`
  /* display: inline-block; */
  input {
    padding: 22px 15px;
    border-radius: 7px;
    border: solid 1px var(--gray-3);
    background-color: var(--white-two);
  }

  .ant-form-explain {
    text-align: left;
    text-indent: 10px;
  }

  .component_form_input_password .ant-form-item-children-icon {
    margin-right: 20px;
  }

  .component_form_group {
    position: relative;
    width: 100%;
    overflow: hidden;
  }

  .component_top_right_btn {
    cursor: pointer;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: var(--dark-green);
    position: absolute;
    right: 0;
    top: 0;
    font-weight: bold;
  }

  .component_form_group_title {
    font-size: 14px;
    font-weight: bold;
    line-height: 31px;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: var(--black-full);
    margin-bottom: 10px;
    text-align: left;
  }

  .component_form_group_children {
    width: 100%;
    position: relative;
  }

  .component_form_group_children_inline {
  }

  .component_form_group_children .ant-calendar-picker-input.ant-input {
    border-radius: 7px;
    border: solid 1px var(--gray-3);
    background-color: var(--bg);
  }

  .component_form_group_children .ant-calendar-picker {
    width: 100%;
  }

  .component_form_group_children textarea {
    border-radius: 7px;
    border: solid 1px var(--gray-3);
  }

  .component_input_select .ant-select-selection {
    border-radius: 7px;
    border: solid 1px var(--gray-3);
    height: 40px;
    margin-bottom: 14px;
    .ant-select-selection__placeholder {
      margin-top: -5px;
    }

    .ant-select-selection-selected-value {
      margin-top: 5px;
    }

    input {
      text-indent: -15px;
    }
  }

  .ant-select-open .ant-select-selection {
    box-shadow: none;
  }

  .component_form_input_button {
    position: relative;
  }

  .component_form_input_button .ant-input {
    width: 100%;
  }

  .component_form_input_button .component_button {
    position: absolute;
    top: 10px;
    right: 10px;
  }

  .component_form_input_button .button__text {
    font-size: 14px;
    line-height: 21px;
    padding: 3px 14px;
    border-radius: 4px;
  }
`;
