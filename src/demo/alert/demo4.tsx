import React from 'react';
import { Alert, Space } from '../../../packages';

const Demo4 = () => {
  return (
    <Space direction="vertical" style={{ alignItems: "normal" }}>
      <Alert type="success" message="A success prompt" showIcon closeable />
      <Alert type="info" message="A info prompt" showIcon closeable />
      <Alert type="warning" message="A warning prompt" showIcon closeable />
      <Alert type="error" message="A error prompt" showIcon closeable />
    </Space>
  )
}

export default Demo4;