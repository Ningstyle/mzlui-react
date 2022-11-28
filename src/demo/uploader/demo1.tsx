import React from 'react';
import { Button } from '../../../packages';
import Uploader from '../../../packages/Uploader';

const Demo1 = () => {
  return (
    <Uploader
      name="test"
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    >
      <Button>
        <span className="m-icon-download">普通上传组件</span>
      </Button>
    </Uploader>
  );
};
export default Demo1;
