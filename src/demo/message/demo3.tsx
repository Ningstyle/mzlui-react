import React from 'react';
import { Message, Button } from '../../../packages';

export default function Demo() {
  const loading = (): void => {
    Message.loading('正在加载中...', 10);
  };
  return (
    <Button onClick={loading}>显示加载中</Button>
  );
}
