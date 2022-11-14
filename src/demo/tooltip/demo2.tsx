import React from 'react';
import { Tooltip, Button, Space } from '../../../packages';

export default function Demo() {
  return (
    <Space>
      <Tooltip content="这是从上边弹出的文字提示气泡">
        <Button>上边弹出</Button>
      </Tooltip>
      <Tooltip content="这是从下边弹出的文字提示气泡" align="bottom">
        <Button>下边弹出</Button>
      </Tooltip>
      <Tooltip content="这是从左边弹出的文字提示气泡" align="left">
        <Button>左边弹出</Button>
      </Tooltip>
      <Tooltip content="这是从右边弹出的文字提示气泡" align="right">
        <Button>右边弹出</Button>
      </Tooltip>
    </Space>
  );
}
