import React from 'react';
import { Space, Progress } from '../../../packages';

export default function Demo() {
  return (
    <Space>
      <Progress type="circle" percent={10} strokeColor="red">
        圆角按钮
      </Progress>

      <Progress type="circle" percent={20} size={50} />

      <Progress type="circle" percent={40} size={70} strokeColor="green" />

      <Progress
        type="circle"
        percent={40}
        size={80}
        strokeColor="coral"
        strokeWidth={5}
      />

      <Progress
        type="circle"
        percent={40}
        strokeColor="violet"
        strokeWidth={5}
        strokeLinecap="round"
      >
        完成40%
      </Progress>
    </Space>
  );
}
