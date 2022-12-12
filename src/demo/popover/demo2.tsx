import React from 'react';
import { Popover, Button, Space } from '../../../packages';

function Demo() {
  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  );
  return (
    <Space>
      <Popover
        content={content}
        title="这是从上边弹出的文字提示气泡"
        placement="top"
      >
        <Button>上边弹出</Button>
      </Popover>
      <Popover
        content={content}
        title="这是从下边弹出的文字提示气泡"
        placement="bottom"
      >
        <Button>下边弹出</Button>
      </Popover>
      <Popover
        content={content}
        title="这是从左边弹出的文字提示气泡"
        placement="left"
      >
        <Button>左边弹出</Button>
      </Popover>
      <Popover
        content={content}
        title="这是从右边弹出的文字提示气泡"
        placement="right"
      >
        <Button>右边弹出</Button>
      </Popover>
    </Space>
  );
}
export default Demo;
