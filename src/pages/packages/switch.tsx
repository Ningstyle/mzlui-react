/*
  @name:"Switch 开关"
  @group:"通用"
*/
import React from 'react';
import Title from '../../components/title';
import InstanceView from '../../layout/instanceView';
import Demo1 from '../../demo/switch/demo1';
import Demo2 from '../../demo/switch/demo2';
import Demo3 from '../../demo/switch/demo3';
import Demo4 from '../../demo/switch/demo4';
import Api from '../../demo/switch/api';

export default function SwitchPage() {
  return (
    <>
      <Title
        title="Switch"
        notes="开关"
        desc="开关选择器，表示开关状态/两种状态之间的切换时使用。"
      />

      <InstanceView
        subtitle="默认"
        subnotes=""
        demo={<Demo1 />}
        subdesc="最简单的用法"
        path="switch/demo1"
      />

      <InstanceView
        subtitle="文字和图标"
        subnotes=""
        demo={<Demo2 />}
        subdesc="可以自定义显示的文字或图标"
        path="switch/demo2"
      />

      <InstanceView
        subtitle="加载状态"
        subnotes=""
        demo={<Demo3 />}
        subdesc="加载中..."
        path="switch/demo3"
      />

      <InstanceView
        subtitle="禁用"
        subnotes=""
        demo={<Demo4 />}
        subdesc="不可用"
        path="switch/demo4"
      />

      <Api />
    </>
  );
}
