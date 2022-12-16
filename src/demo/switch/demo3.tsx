import React, { useState } from 'react';
import { Space, Switch, Button } from '../../../packages';

export default function Demo() {
  const [loading, setLoading] = useState(true);

  return (
    <Space>
      <Switch loading={loading} onClick={() => setLoading(!loading)} />
      <Switch loading={loading} checked />
      <Button onClick={() => setLoading(!loading)}>切换状态</Button>
    </Space>
  );
}
