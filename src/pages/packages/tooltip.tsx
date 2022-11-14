/*
  @name:"Tooltip 文字提示"
  @group:"通用"
*/
import React from 'react';
import Title from '../../components/title';
import InstanceView from '../../layout/instanceView';
import Demo1 from '../../demo/tooltip/demo1';
import Demo2 from '../../demo/tooltip/demo2';
import Demo3 from '../../demo/tooltip/demo3';
import Api from '../../demo/tooltip/api';

export default function ToolTipPage() {
  return (
    <>
      <Title title="Tooltip" notes="文字提示" desc="简单的文字提示气泡框。" />
      <InstanceView
        subtitle="基本使用"
        subnotes=""
        demo={<Demo1 />}
        subdesc="最简单的用法。"
        path="tooltip/demo1"
      />
      <InstanceView
        subtitle="不同的弹出位置"
        subnotes=""
        demo={<Demo2 />}
        subdesc="可以通过设置align属性来控制弹出的位置。"
        path="tooltip/demo2"
      />
      <InstanceView
        subtitle="多彩的提示方式"
        subnotes=""
        demo={<Demo3 />}
        subdesc="可以通过设置color属性来控制提示的颜色。"
        path="tooltip/demo3"
      />
      <Api />
    </>
  );
}
