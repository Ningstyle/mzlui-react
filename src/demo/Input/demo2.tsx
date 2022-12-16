import React from 'react';
import { Input } from '../../../packages';

export default function Demo() {
  return (
    <Input
      style={{ width: '264px' }}
      placeholder="可清空的输入框"
      value="测试内容"
      clearable
    />
  )
}
