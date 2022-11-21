import React from 'react';
import { Timeline } from '../../../packages';

export default function Demo() {
  return (
    <Timeline>
      <Timeline.Item dot={<i className="m-icon-error" />} color="red">
        I was born in 1996
      </Timeline.Item>
      <Timeline.Item>I went to College in 2014</Timeline.Item>
      <Timeline.Item dot={<i className="m-icon-success" />} color="green">
        I graduated in 2021
      </Timeline.Item>
      <Timeline.Item>I am in Beijing now</Timeline.Item>
    </Timeline>
  );
}
