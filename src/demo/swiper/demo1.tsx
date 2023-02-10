import React from 'react';
import { Swiper } from '../../../packages';

export default function Demo() {
  const style = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    fontSize: '2.5rem',
  };
  return (
    <Swiper>
      <div style={style}>1</div>
      <div style={style}>2</div>
      <div style={style}>3</div>
      <div style={style}>4</div>
    </Swiper>
  );
}
