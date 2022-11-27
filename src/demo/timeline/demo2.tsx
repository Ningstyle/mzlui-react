import React from 'react';
import { Timeline } from '../../../packages';

export default function Demo() {
  return (
    <Timeline>
      <Timeline.Item color="green">I was born in 1996</Timeline.Item>
      <Timeline.Item color="blue">
        <p>I went to College in 2014</p>
        <p>got bachelor degree</p>
        <p>got master degree</p>
      </Timeline.Item>
      <Timeline.Item color="red">I graduated in 2021</Timeline.Item>
      <Timeline.Item color="gray">I am in Beijing now</Timeline.Item>
    </Timeline>
  );
}
