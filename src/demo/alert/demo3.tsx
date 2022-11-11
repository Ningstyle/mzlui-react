import React from 'react';
import { Alert, Space } from '../../../packages';

const Demo3 = () => {
  return (
    <Space direction="vertical" style={{ alignItems: "normal" }}>
      <Alert type="success" message="A success prompt" showIcon />
      <Alert type="info" message="A info prompt" showIcon />
      <Alert type="warning" message="A warning prompt" showIcon />
      <Alert type="error" message="A error prompt" showIcon />
    </Space>
  )
}

export default Demo3;