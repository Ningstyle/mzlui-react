import React from 'react';
import { Alert, Space } from '../../../packages';

const Demo2 = () => {
  return (
    <Space direction="vertical" style={{ alignItems: "normal" }}>
      <Alert type="success" message="A success prompt" />
      <Alert type="info" message="A info prompt" />
      <Alert type="warning" message="A warning prompt" />
      <Alert type="error" message="A error prompt" />
    </Space>
  )
}

export default Demo2;