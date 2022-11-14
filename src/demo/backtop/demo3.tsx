import React from 'react';
import { Backtop, Button } from '../../../packages';

export default function Demo() {
  const style = {
    right: '140px',
    background: '#faad14',
    borderRadius: '50%',
  }
  return (
    <>
      <Button type="text">通过style自定义Backtop组件的样式</Button>
      <Backtop target=".contentBox" style={style}>
        <i className="m-icon-arrow-up-filling" />
      </Backtop>
    </>
  );
}