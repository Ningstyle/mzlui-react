/*
  @name:"Backtop 回到顶部"
  @group:"交互"
*/
import React from 'react';
import Title from '../../components/title';
import InstanceView from '../../layout/instanceView';
import Demo1 from '../../demo/backtop/demo1';
import Demo2 from '../../demo/backtop/demo2';
import Demo3 from '../../demo/backtop/demo3';
import Api from '../../demo/backtop/api';

export default function DemoPage() {
  return (
    <div>
      <Title title="Backtop" notes="返回顶部" desc="用于快捷返回到页面顶部的组件" />
      <InstanceView
        subtitle="基本使用"
        subnotes=""
        demo={<Demo1 />}
        subdesc="Backtop 组件基本使用示例。"
        path="backtop/demo1"
      />
      <InstanceView
        subtitle="指定滚动元素"
        subnotes=""
        demo={<Demo2 />}
        subdesc="通过target属性指定滚动元素。"
        path="backtop/demo2"
      />
      <InstanceView
        subtitle="自定义样式"
        subnotes=""
        demo={<Demo3 />}
        subdesc="自定义Backtop组件的样式。"
        path="backtop/demo3"
      />
      <Api />
    </div>
  );
}