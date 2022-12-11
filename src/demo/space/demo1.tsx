import React from "react";
import { Space, Button, Input } from '../../../packages';

export default function Demo() {
  return (
    <Space>
      <Button icon="m-icon-edit">编辑</Button>
      <Button type="primary" icon="m-icon-shangchuan" round />
      <Input placeholder="输入框" style={{ width: '264px' }} />
    </Space>
  )
}