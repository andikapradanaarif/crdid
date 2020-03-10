import React from 'react';
import { Input, Select, Form } from 'antd';
import { FormInputWrapper } from './style';
import { Button } from '../';

const InputForm = props => {
  return (
    <FormInputWrapper className={'component_form_input'}>
      <Form.Item
        hasFeedback
        validateStatus={props.validateStatus}
        help={props.help}
      >
        <Input
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          type={props.type === undefined ? 'text' : props.type}
          disabled={props.disabled}
        />
      </Form.Item>
    </FormInputWrapper>
  );
};

const InputFormButton = props => {
  return (
    <FormInputWrapper>
      <div className={'component_form_input_button'}>
        <Form.Item
          hasFeedback
          validateStatus={props.validateStatus}
          help={props.help}
        >
          <Input
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
            type={props.type === undefined ? 'text' : props.type}
            disabled={props.disabled}
          />
        </Form.Item>
        <Button text={props.textBtn} />
      </div>
    </FormInputWrapper>
  );
};

const InputPassword = props => {
  return (
    <FormInputWrapper
      className={'component_form_input component_form_input_password'}
    >
      <Form.Item
        hasFeedback
        validateStatus={props.validateStatus}
        help={props.help}
      >
        <Input.Password
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          disabled={props.disabled}
        />
      </Form.Item>
    </FormInputWrapper>
  );
};

const InputSelect = props => {
  return (
    <FormInputWrapper>
      <div className="component_input_select">
        <Select
          value={props.value}
          onFocus={props.onFocus}
          onChange={props.onChange}
          placeholder={props.placeholder}
          notFoundContent={props.notFoundContent}
          showSearch
          disabled={props.disabled}
          optionFilterProp="children"
          filterOption={(input, option) =>
            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >=
            0
          }
        >
          {props.children}
        </Select>
      </div>
    </FormInputWrapper>
  );
};

const FormGroup = props => {
  return (
    <FormInputWrapper className={props.className}>
      <div className="component_form_group">
        <h4 className="component_form_group_title">{props.title}</h4>
        <div className="component_top_right_btn" onClick={props.onTopRightBtn}>
          {props.topRightBtn}
        </div>
        <div className="component_form_group_children">{props.children}</div>
      </div>
    </FormInputWrapper>
  );
};

const FormGroupInline = props => {
  return (
    <FormInputWrapper>
      <div className="component_form_group">
        <h4 className="component_form_group_title">{props.title}</h4>
        <div className="component_top_right_btn">{props.topRightBtn}</div>
        <div className="component_form_group_children_inline">
          {props.children}
        </div>
      </div>
    </FormInputWrapper>
  );
};

export {
  InputForm,
  InputPassword,
  FormGroup,
  FormGroupInline,
  InputSelect,
  InputFormButton
};
