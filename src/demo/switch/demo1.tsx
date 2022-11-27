import React from 'react';
import { Space, Switch } from '../../../packages';

export default function Demo() {
  return (
    <div>
      <Space>
        <Switch />
        <Switch checked />
      </Space>
    </div>
  );
}
