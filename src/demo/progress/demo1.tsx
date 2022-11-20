import React from 'react';
import { Progress } from '../../../packages';

export default function Demo() {
  return (
    <>
      <div style={{ margin: 15 }}>
        <Progress percent={60} type="line" strokeColor="red" />
      </div>

      <div style={{ margin: 15 }}>
        <Progress percent={80} type="line" strokeColor="blue" />
      </div>

      <div style={{ margin: 15 }}>
        <Progress percent={50} type="line" strokeColor="coral">
          <span style={{ marginLeft: 8 }}>50%</span>
        </Progress>
      </div>
    </>
  );
}
