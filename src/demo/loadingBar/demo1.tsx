import React from 'react';
import { Button, LoadingBar, Space } from '../../../packages';

let n = 10;
export default function Demo() {
  const updateClick = () => {

    if (n >= 100) {
      n = 0
    } else {
      n += 10;
    }
    LoadingBar.update({ percent: n })
  }
  return (
    <Space>
      <Button onClick={() => LoadingBar.start()}>Start</Button>
      <Button onClick={() => LoadingBar.finish()} type="primary">Finish</Button>
      <Button onClick={() => LoadingBar.error()} type="error">Error</Button>
      <Button onClick={updateClick}>Update</Button>
    </Space>
  )
}