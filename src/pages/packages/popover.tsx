/*
  @name:"Popover 气泡卡片"
  @group:"反馈"
*/
import React from 'react';
import Title from '../../components/title';
import InstanceView from '../../layout/instanceView';
import Demo1 from '../../demo/popover/demo1';
import Demo2 from '../../demo/popover/demo2';
import Demo3 from '../../demo/popover/demo3';
import Api from '../../demo/popover/api';

export default function PopOverPage() {
  return (
    <>
      <Title
        title="Popover"
        notes="气泡卡片"
        desc="点击/鼠标移入元素，弹出气泡式的卡片浮层。"
      />
      <InstanceView
        subtitle="基本使用"
        subnotes=""
        demo={<Demo1 />}
        subdesc="最简单的用法。"
        path="popover/demo1"
      />
      <InstanceView
        subtitle="不同的弹出位置"
        subnotes=""
        demo={<Demo2 />}
        subdesc="可以通过设置align属性来控制弹出的位置。"
        path="popover/demo2"
      />
      <InstanceView
        subtitle="从浮层内关闭"
        subnotes=""
        demo={<Demo3 />}
        subdesc="使用visible属性控制浮层显示"
        path="popover/demo3"
      />
      <Api />
    </>
  );
}
