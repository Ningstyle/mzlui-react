import React from 'react';
import { Button, Popover } from '../../../packages';

function Demo1() {
  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  );
  return (
    <Popover content={content} title="Title" align="top">
      <Button>Hover me</Button>
    </Popover>
  );
}

export default Demo1;
