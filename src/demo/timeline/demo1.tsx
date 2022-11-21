import React, { useState } from 'react';
import { Space, Button, Timeline } from '../../../packages';

export default function Demo() {
  const [reverse, setReverse] = useState<boolean>(false);
  return (
    <>
      <Space>
        <Button
          type={reverse ? 'primary' : 'default'}
          round
          onClick={() => setReverse(true)}
        >
          reverse
        </Button>
        <Button
          type={!reverse ? 'primary' : 'default'}
          round
          onClick={() => setReverse(false)}
        >
          not reverse
        </Button>
      </Space>
      <Timeline reverse={reverse} style={{ marginTop: 24 }}>
        <Timeline.Item>I was born in 1996</Timeline.Item>
        <Timeline.Item>I went to College in 2014</Timeline.Item>
        <Timeline.Item>I graduated in 2021</Timeline.Item>
        <Timeline.Item>I am in Beijing now</Timeline.Item>
      </Timeline>
    </>
  );
}
