import React, { useState } from 'react';
import { Button, Space, Swiper } from '../../../packages';

export default function Demo() {
  const [dotPosition, setDotPosition] = useState<
    'left' | 'right' | 'bottom' | 'top'
  >('bottom');

  const handleChangeDotPostion = (position) => {
    setDotPosition(position);
  };
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
      <span>不显示指示点</span>
      <Swiper showDots={false}>
        <div style={style}>1</div>
        <div style={style}>2</div>
        <div style={style}>3</div>
        <div style={style}>4</div>
      </Swiper>

      <span>指示点为line</span>
      <Swiper dotType="line">
        <div style={style}>1</div>
        <div style={style}>2</div>
        <div style={style}>3</div>
        <div style={style}>4</div>
      </Swiper>

      <span>指示点为dot</span>
      <Swiper dotType="dot">
        <div style={style}>1</div>
        <div style={style}>2</div>
        <div style={style}>3</div>
        <div style={style}>4</div>
      </Swiper>

      <span>指示点为square</span>
      <Swiper dotType="square">
        <div style={style}>1</div>
        <div style={style}>2</div>
        <div style={style}>3</div>
        <div style={style}>4</div>
      </Swiper>

      <span>指示点位置</span>
      <Button onClick={() => handleChangeDotPostion('top')}>
        切换指示点位置为top
      </Button>
      <Button onClick={() => handleChangeDotPostion('bottom')}>
        切换指示点位置为bottom
      </Button>
      <Button onClick={() => handleChangeDotPostion('left')}>
        切换指示点位置为left
      </Button>
      <Button onClick={() => handleChangeDotPostion('right')}>
        切换指示点位置为right
      </Button>
      <Swiper dotPosition={dotPosition}>
        <div style={style}>1</div>
        <div style={style}>2</div>
        <div style={style}>3</div>
        <div style={style}>4</div>
      </Swiper>
    </Space>
  );
}
