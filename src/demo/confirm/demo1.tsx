import React from 'react'
import { Space, Button,Confirm } from '../../../packages';

export default function Demo1() {
  return (
    <Space>
      <Confirm >
        <Button>Click Me</Button>
      </Confirm>
      <Confirm >
        包裹文本内容
      </Confirm>
      <Confirm >
        <i className="m-icon-success" />
      </Confirm>
    </Space>
  )
}
