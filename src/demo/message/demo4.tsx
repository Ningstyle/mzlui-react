import React from 'react';
import { Message, Button } from '../../../packages';

export default function Demo() {
  const info = (): void => {
    Message.info('10秒后将自动消失', 10);
  };
  return (
    <Button onClick={info}>自定义时长</Button>
  );
}
