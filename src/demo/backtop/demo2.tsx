import React from 'react';
import { Backtop } from '../../../packages';

export default function Demo() {
  const style = {
    width: '100%',
    height: '600px',
    overflow: 'auto',
  }
  return (
    <>
      <div id="TestBox" style={style}>
        {
          Array.from({ length: 100 }).map((item: any, index: number) => (<p key={index}>scroll element</p>))
        }
      </div>
      <Backtop target="#TestBox" style={{ right: '80px' }} visibilityHeight={500} />
    </>
  );
}