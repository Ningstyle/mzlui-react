import React from 'react';
import { Space, Button } from '../../../packages';

export default function Demo() {
  return (
    <Space>
      <Button>默认按钮</Button>
      <Button type="primary" icon="m-icon-copy">主要按钮</Button>
      <Button type="success">成功按钮</Button>
      <Button type="warning">警告按钮</Button>
      <Button type="error">失败按钮</Button>
      <Button type="info">信息按钮</Button>
      <Button type="link">链接按钮</Button>
      <Button type="text">文本按钮</Button>
    </Space>
  )
}
