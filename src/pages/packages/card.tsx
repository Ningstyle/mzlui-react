/*
  @name:"Card 卡片"
  @group:"通用"
*/

import React from "react";
import Title from "../../components/title";
import InstanceView from "../../layout/instanceView";
import Api from "../../demo/card/api";
import Demo1 from "../../demo/card/demo1";
import Demo2 from '../../demo/card/demo2';
import Demo3 from '../../demo/card/demo3';
import Demo4 from '../../demo/card/demo4';
import Demo5 from '../../demo/card/demo5';
import Demo6 from '../../demo/card/demo6';
import Demo7 from '../../demo/card/demo7';

export default function CardPage() {
  return (
    <>
      <Title title="Card" notes="卡片" desc="常规的卡片容器，可以承载标题、段落、图片、列表等内容。" />
      <InstanceView
        subtitle="基本使用"
        subnotes=""
        demo={<Demo1 />}
        subdesc="基础卡片包含标题、内容等部分。"
        path="card/demo1"
      />
       <InstanceView
        subtitle="无边框卡片"
        subnotes=""
        demo={<Demo2 />}
        subdesc="在非纯白背景上可使用无边框的卡片。"
        path="card/demo2"
       />
       <InstanceView
        subtitle="简洁卡片"
        subnotes=""
        demo={<Demo3 />}
        subdesc="无标题，仅包括内容区域。"
        path="card/demo3"
       />
       <InstanceView
        subtitle="带封面的卡片"
        subnotes=""
        demo={<Demo4 />}
        subdesc="可以使用 cover 属性设置封面。"
        path="card/demo4"
       />
       <InstanceView
        subtitle="内部卡片"
        subnotes=""
        demo={<Demo5 />}
        subdesc="卡片可以嵌套使用。"
        path="card/demo5"
       />
       <InstanceView
        subtitle="阴影卡片"
        subnotes=""
        demo={<Demo6 />}
        subdesc="可选择hover时显示阴影、始终显示阴影。"
        path="card/demo6"
       />
       <InstanceView
        subtitle="自定义actions"
        subnotes=""
        demo={<Demo7 />}
        subdesc="接收 ReactNode 数组，元素间将以相同间距展示于内容区底部。"
        path="card/demo7"
       />
      <Api />
    </>
  );
}
