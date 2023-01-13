/*
  @name:"Mask 遮罩"
  @group:"通用"
*/
import React from 'react';
import Title from '../../components/title';
import InstanceView from '../../layout/instanceView';
import Demo1 from '../../demo/mask/demo1';
import Demo2 from '../../demo/mask/demo2';
import Demo3 from '../../demo/mask/demo3';
import Api from '../../demo/mask/api';

export default function DemoPage() {
  return (
    <div>
      <Title title="Mask" notes="遮罩" desc="页面遮罩层" />
      <InstanceView
        subtitle="基本示例"
        subnotes=""
        demo={<Demo1 />}
        subdesc=""
        path="mask/demo1"
      />
      <InstanceView
        subtitle="自定义Mask的背景颜色"
        subnotes=""
        demo={<Demo2 />}
        subdesc=""
        path="mask/demo2"
      />
      <InstanceView
        subtitle="定义Mask内的内容"
        subnotes=""
        demo={<Demo3 />}
        subdesc=""
        path="mask/demo3"
      />
      <Api />
    </div>
  );
}