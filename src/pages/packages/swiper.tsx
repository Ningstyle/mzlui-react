/*
  @name:"Swiper 轮播"
  @group:"数据"
*/
import React from 'react';
import Title from '../../components/title';
import Api from '../../demo/swiper/api';
import Demo1 from '../../demo/swiper/demo1';
import Demo2 from '../../demo/swiper/demo2';
import Demo3 from '../../demo/swiper/demo3';
import Demo4 from '../../demo/swiper/demo4';
import InstanceView from '../../layout/instanceView';

export default function SwiperPage() {
  return (
    <>
      <Title
        title="Swiper"
        notes="轮播"
        desc="在有限空间内，循环播放同一类型的图片、文字等内容"
      />

      <InstanceView
        subtitle="基本使用"
        subnotes=""
        demo={<Demo1 />}
        subdesc="轮播组件的基本使用"
        path="swiper/demo1"
      />

      <InstanceView
        subtitle="指示点样式及位置"
        subnotes=""
        demo={<Demo2 />}
        subdesc="配置轮播组件指示点样式及是否显示，指示点位置在left | right时不可以显示箭头"
        path="swiper/demo2"
      />

      <InstanceView
        subtitle="左右箭头"
        subnotes=""
        demo={<Demo3 />}
        subdesc="是否显示左右箭头及自定义左右箭头"
        path="swiper/demo3"
      />

      <InstanceView
        subtitle="自动轮播"
        subnotes=""
        demo={<Demo4 />}
        subdesc="配置后会自动轮播下一张图片"
        path="swiper/demo4"
      />

      <Api />
    </>
  );
}
