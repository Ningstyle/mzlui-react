import React from 'react';
import { Tooltip, Button } from '../../../packages';

export default function Demo() {
  return (
    <Tooltip content="简单的文字提示气泡框">
      <Button>文字提示</Button>
    </Tooltip>
  );
}
