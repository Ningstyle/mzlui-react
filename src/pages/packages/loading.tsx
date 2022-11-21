/*
  @name:"Loading 加载中"
  @group:"交互"
*/
import React from 'react';
import Title from '../../components/title';
import InstanceView from '../../layout/instanceView';
import Demo1 from '../../demo/loading/demo1';
import Demo2 from '../../demo/loading/demo2';
import Demo3 from '../../demo/loading/demo3';

export default function DemoPage() {
  return (
    <div>
      <Title title="Loading" notes="加载中" desc="用于页面和区块的加载中状态" />
      <InstanceView
        subtitle="基本使用"
        subnotes=""
        demo={<Demo1 />}
        subdesc="Loading组件的基本使用方法"
        path="loading/demo1"
      />
      <InstanceView
        subtitle="区域加载"
        subnotes=""
        demo={<Demo2 />}
        subdesc="通过target属性指定加载区域，指定加载区域时，相对父级须为相对定位。"
        path="loading/demo2"
      />
      <InstanceView
        subtitle="指定加载时长"
        subnotes=""
        demo={<Demo3 />}
        subdesc="通过duration（单位:秒）设置指定加载时长，若不设置，则需调用Loading.close()手动关闭。"
        path="loading/demo3"
      />
    </div>
  );
}