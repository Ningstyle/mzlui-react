import React from 'react';
import { Space, Button } from '../../../packages';

export default function Demo1() {
  return (
    <Space>
      <Button>Default Button</Button>
      <Button type="primary">Primary Button</Button>
      <Button type="success">Success Button</Button>
      <Button type="warning">Warning Button</Button>
      <Button type="error">Error Button</Button>
      <Button type="info">Info Button</Button>
      <Button type="link">Link Button</Button>
      <Button type="text">Text Button</Button>
    </Space>
  )
}
