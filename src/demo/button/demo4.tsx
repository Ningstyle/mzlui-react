import React from 'react';
import { Space, Button } from '../../../packages';

export default function Demo() {
  return (
    <Space>
      <Button icon="m-icon-edit">编辑</Button>
      <Button type="primary" icon="m-icon-copy">复制</Button>
      <Button icon="m-icon-search" round>搜索</Button>
      <Button type="primary" icon="m-icon-scanning" round>扫描</Button>
      <Button>设置<span className="m-icon-setting" /></Button>
      <Button type="primary">添加<span className="m-icon-add" /></Button>
      <Button icon="m-icon-edit" />
      <Button type="primary" icon="m-icon-copy" />
      <Button icon="m-icon-search" round />
      <Button type="primary" icon="m-icon-scanning" round />
    </Space>
  )
}
