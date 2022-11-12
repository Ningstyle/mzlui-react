import React from 'react';
import { Tooltip, Button } from '../../../packages';

export default function Demo() {
  return (
    <>
      <Tooltip content="Tooltip will show on .">
        <Button>文字提示</Button>
      </Tooltip>
      <Tooltip content="Tooltip will show on mouse enter.">
        <Button>文字提示</Button>
      </Tooltip>
      <Tooltip content="Tooltip will show on mouse enter.">
        <div>文字提示</div>
      </Tooltip>
    </>
  );
}
