import React from 'react';
import { Mask, Button, Table } from '../../../packages';
import { example } from '../../utils/example';

export default function Demo() {
  const [visible, setVisible] = React.useState(false);
  const style = {
    width: '500px',
    height: '500px',
    background: '#fff',
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '100px auto'
  }
  return (
    <>
      <Mask visible={visible} maskClick={() => setVisible(false)}>
        <div className="tabBox" style={style} onClick={(e) => e.stopPropagation()}>
          <Button onClick={() => setVisible(false)}>点击关闭遮罩层</Button>
        </div>
      </Mask>
      <Button type="primary" onClick={() => setVisible(true)}>点击打开遮罩层</Button>
    </>
  )
}