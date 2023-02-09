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
      <span>不显示箭头</span>
      <Swiper showArrow={false}>
        <div style={style}>1</div>
        <div style={style}>2</div>
        <div style={style}>3</div>
        <div style={style}>4</div>
      </Swiper>

      <span>默认箭头</span>
      <Swiper>
        <div style={style}>1</div>
        <div style={style}>2</div>
        <div style={style}>3</div>
        <div style={style}>4</div>
      </Swiper>

      <span>自定义箭头</span>
      <Swiper
        leftArrow={<i className="m-icon-direction-left" />}
        rightArrow={<i className="m-icon-direction-right" />}
      >
        <div style={style}>1</div>
        <div style={style}>2</div>
        <div style={style}>3</div>
        <div style={style}>4</div>
      </Swiper>
    </Space>
  );
}
