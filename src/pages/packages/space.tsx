/*
  @name:"Space 间距"
  @group:"通用"
*/
import React from 'react';
import Title from '../../components/title';
import InstanceView from '../../layout/instanceView';
import Demo1 from '../../demo/space/demo1';
import Demo2 from '../../demo/space/demo2';
import Demo3 from '../../demo/space/demo3';
import Demo4 from '../../demo/space/demo4';
import Api from '../../demo/space/api';

export default function DemoPage() {
  return (
    <div>
      <Title title="Space" notes="间距" desc="设置组件之间的间距。" />
      <InstanceView
        subtitle="基本用法"
        subnotes=""
        demo={<Demo1 />}
        subdesc="相邻组件水平间距。"
        path="space/demo1"
      />
      <InstanceView
        subtitle="垂直间距"
        subnotes=""
        demo={<Demo2 />}
        subdesc="相邻组件垂直间距。"
        path="space/demo2"
      />
      <InstanceView
        subtitle="自定义间距大小"
        subnotes=""
        demo={<Demo3 />}
        subdesc="相邻组件垂直间距。"
        path="space/demo3"
      />
      <InstanceView
        subtitle="对齐方式"
        subnotes=""
        demo={<Demo4 />}
        subdesc="间距组件的对齐方式。"
        path="space/demo4"
      />
      <Api />
    </div>
  );
}