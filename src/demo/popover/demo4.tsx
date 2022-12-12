import React from 'react';
import { Button, Popover } from '../../../packages';

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

const Demo: React.FC = () => (
  <div>
    <Popover content={content} title="Title" trigger="hover">
      <Button>Hover me</Button>
    </Popover>
    <Popover content={content} title="Title" trigger="focus">
      <Button>Focus me</Button>
    </Popover>
    <Popover content={content} title="Title" trigger="click">
      <Button>Click me</Button>
    </Popover>
  </div>
);

export default Demo;
