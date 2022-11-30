import React from 'react';
import { Button, LoadingBar, Space } from '../../../packages';

export default function Demo() {
  return (
    <Space>
      <Button onClick={() => LoadingBar.start({ color: '#52c41a', height: 4 })}>Start</Button>
      <Button onClick={() => LoadingBar.finish({ color: '#52c41a', height: 4 })} type="primary">Finish</Button>
    </Space>
  )
}