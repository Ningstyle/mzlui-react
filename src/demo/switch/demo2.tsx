import React from 'react';
import { Space, Switch } from '../../../packages';

export default function Demo() {
  return (
    <Space>
      <Switch checkedChildren="开" unCheckedChildren="关" />
      <Switch
        checked
        checkedChildren={<i className="m-icon-select" />}
        unCheckedChildren={<i className="m-icon-close" />}
      />
    </Space>
  );
}
