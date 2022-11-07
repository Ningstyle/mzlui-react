import React from 'react';
import { Button, Divider } from '../../../packages';

export default function Demo() {
  return (
    <div>
      I sit at my window this morning where the world like a passer-by stops for
      a moment, nods to me and goes.
      <Divider>我是分割线</Divider>
      There little thoughts are the rustle of leaves; they have their whisper of
      joy in my mind.
      <Divider position="center">我是分割线</Divider>
      There little thoughts are the rustle of leaves; they have their whisper of
      joy in my mind.
      <Divider position="right">我是分割线</Divider>
      There little thoughts are the rustle of leaves; they have their whisper of
      joy in my mind.
      <Divider>
        <Button>这是按钮</Button>
      </Divider>
      There little thoughts are the rustle of leaves; they have their whisper of
      joy in my mind.
    </div>
  );
}
