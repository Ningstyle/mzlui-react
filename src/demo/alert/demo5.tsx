import React from 'react';
import { Alert, Space } from '../../../packages';

const Demo5 = () => {
  return (
    <Space direction="vertical" style={{ alignItems: 'normal' }}>
      <Alert
        type="success"
        message="A success prompt"
        description="Success Description Success Description Success Description"
      />
      <Alert
        type="info"
        message="A info prompt"
        description="Info Description Info Description Info Description Info Description"
        showIcon
        closeable
      />
      <Alert
        type="warning"
        message="A warning prompt"
        description="Warning Description Warning Description Warning Description Warning Description"
        showIcon
        closeable
      />
      <Alert
        type="error"
        message="A error prompt"
        description="Error Description Error Description Error Description Error Description"
        showIcon
        closeable
      />
    </Space>
  );
};

export default Demo5;
