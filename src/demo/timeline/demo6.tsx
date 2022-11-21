import React, { useState } from 'react';
import { Button, Space, Timeline } from '../../../packages';

export default function Demo() {
  const [mode, setMode] = useState<'left' | 'middle' | 'right'>('left');
  return (
    <>
      <Space>
        <Button
          type={mode === 'left' ? 'primary' : 'default'}
          round
          onClick={() => setMode('left')}
        >
          left
        </Button>
        <Button
          type={mode === 'middle' ? 'primary' : 'default'}
          round
          onClick={() => setMode('middle')}
        >
          middle
        </Button>
        <Button
          type={mode === 'right' ? 'primary' : 'default'}
          round
          onClick={() => setMode('right')}
        >
          right
        </Button>
      </Space>
      <Timeline mode={mode} style={{ marginTop: 24 }}>
        <Timeline.Item color="green" label="1996-10-15">
          I was born in 1996
        </Timeline.Item>
        <Timeline.Item color="blue" label="2014-09-01">
          <p>I went to College in 2014</p>
          <p>got bachelor degree</p>
          <p>got master degree</p>
        </Timeline.Item>
        <Timeline.Item dot={<i className="m-icon-success" />} color="red">
          I graduated in 2021
        </Timeline.Item>
        <Timeline.Item color="gray" label="2022-11-21">
          I am in Beijing now
        </Timeline.Item>
      </Timeline>
    </>
  );
}
