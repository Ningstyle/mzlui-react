import React from 'react';
import { Space, Button } from '../../../packages';

export default function Demo() {
  return (
    <Space>
      <Button disabled>默认按钮</Button>
      <Button type="primary" icon="m-icon-copy" disabled>主要按钮</Button>
      <Button type="success" loading disabled round>成功按钮</Button>
      <Button type="warning" disabled round>警告按钮</Button>
      <Button type="error" disabled>失败按钮</Button>
      <Button type="info" disabled>信息按钮</Button>
      <Button type="link" disabled>链接按钮</Button>
      <Button type="text" disabled>文本按钮</Button>
    </Space>
  )
}
