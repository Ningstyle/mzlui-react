import React from 'react';
import { Mask, Button } from '../../../packages';

export default function Demo() {
  const [visible, setVisible] = React.useState(false);
  return (
    <>
      <Mask visible={visible} maskClick={() => setVisible(false)} background="rgba(0,0,0,.8)" />
      <Button onClick={() => setVisible(true)}>点击打开遮罩层</Button>
    </>
  )
}