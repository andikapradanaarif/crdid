import React from 'react';
import { UploadWrapper } from './style';
import { Upload } from 'antd';

function Index(props) {
  return (
    <UploadWrapper className="component_upload_button">
      <Upload {...props} accept=".png, .jpeg, .jpg">
        {props.text}
      </Upload>
    </UploadWrapper>
  );
}

export default Index;
