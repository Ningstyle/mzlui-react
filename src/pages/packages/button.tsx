/*
  @name:"Button 按钮"
  @group:"通用"
*/
import React from 'react';
import Title from '../../components/title';
import InstanceView from '../../layout/instanceView';
import Demo1 from '../../demo/button/demo1';
import Demo2 from '../../demo/button/demo2';
import Demo3 from '../../demo/button/demo3';
import Demo4 from '../../demo/button/demo4';
import Demo5 from '../../demo/button/demo5';
import Demo6 from '../../demo/button/demo6';
import Api from '../../demo/button/api';

export default function ButtonPage() {
  return (
    <>
      <Title title="Button" notes="按钮" desc="网页常用 button 按钮，常用于响应一个事件或处理某个逻辑。" />
      <InstanceView
        subtitle="基本使用"
        subnotes=""
        demo={<Demo1 />}
        subdesc="Button 按钮的基本使用。包含八种类型：默认按钮、主要按钮、成功按钮、警告按钮、失败按钮、信息按钮、链接按钮、文本按钮。"
        path="button/demo1"
      />
      <InstanceView
        subtitle="圆角按钮"
        subnotes=""
        demo={<Demo2 />}
        subdesc="按钮的圆角状态。"
        path="button/demo2"
      />
      <InstanceView
        subtitle="按钮尺寸"
        subnotes=""
        demo={<Demo3 />}
        subdesc="通过 size 属性可以设置按钮的不同尺寸。包含三种：大（large）、中（medium）、小（small）。"
        path="button/demo3"
      />
      <InstanceView
        subtitle="图标按钮"
        subnotes=""
        demo={<Demo4 />}
        subdesc="带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。"
        path="button/demo4"
      />
      <InstanceView
        subtitle="加载中状态"
        subnotes=""
        demo={<Demo5 />}
        subdesc="添加 loading 属性即可让按钮处于加载状态。后两个按钮可通过点击预览加载中状态。"
        path="button/demo5"
      />
      <InstanceView
        subtitle="禁用状态"
        subnotes=""
        demo={<Demo6 />}
        subdesc="添加 disabled 属性即可让按钮处于不可用状态。"
        path="button/demo6"
      />
      <Api />
    </>
  );
}
