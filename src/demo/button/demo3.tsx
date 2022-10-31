import React from 'react';
import { Space, Button } from '../../../packages';

export default function Demo() {
  return (
    <Space>
      <Button size="large">Large 按钮</Button>
      <Button type="primary" round>medium 按钮</Button>
      <Button type="primary" size="small">Small 按钮</Button>
    </Space>
  )
}
