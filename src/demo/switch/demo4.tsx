import React, { useState } from 'react';
import { Button, Space, Switch } from '../../../packages';

export default function Demo() {
  const [state, setState] = useState(true);
  return (
    <Space>
      <Switch disabled={state} />
      <Switch checked disabled={state} />
      <Button onClick={() => setState(!state)}>切换状态</Button>
    </Space>
  );
}
