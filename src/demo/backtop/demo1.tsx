import React from 'react';
import { Backtop, Button } from '../../../packages';

export default function Demo() {
  return (
    <>
      <Button type="text">请将页面向下滚动预览效果</Button>
      <Backtop target=".contentBox" />
    </>
  );
}