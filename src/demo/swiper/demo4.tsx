import React from 'react';
import { Space, Swiper } from '../../../packages';

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
    <Space>
      <p>自动轮播</p>
      <Swiper dotType="dot" autoplay duration={3000}>
        <div style={style}>1</div>
        <div style={style}>2</div>
        <div style={style}>3</div>
        <div style={style}>4</div>
      </Swiper>
    </Space>
  );
}
