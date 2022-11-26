import React from 'react';
import { Space, Switch } from '../../../packages';

export default function Demo() {
  return (
    <Space>
      <Switch loading />
      <Switch loading checked />
    </Space>
  );
}
