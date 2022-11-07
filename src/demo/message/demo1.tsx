import React from 'react';
import { Message, Button } from '../../../packages';

export default function Demo() {
  const info = (): void => {
    Message.info('最基本的提示，默认在3秒后消失。');
  }
  return (
    <div>
      <Button onClick={info} type="primary" >基本示例</Button>
    </div>
  );
}
