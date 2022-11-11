/*
  @name:"Divider 分割线"
  @group:"其他"
*/
import React from 'react';
import Title from '../../components/title';
import InstanceView from '../../layout/instanceView';
import Demo1 from '../../demo/divider/demo1';
import Demo2 from '../../demo/divider/demo2';
import Demo3 from '../../demo/divider/demo3';
import Demo4 from '../../demo/divider/demo4';
import Demo5 from '../../demo/divider/demo5';
import Api from '../../demo/divider/api';

export default function DividerPage() {
  return (
    <>
      <Title title="Divider" notes="分割线" desc="区隔内容的分割线" />
      <InstanceView
        subtitle="基本使用"
        subnotes=""
        demo={<Demo1 />}
        subdesc="对不同段落的文本进行分割"
        path="divider/demo1"
      />

      <InstanceView
        subtitle="设置文案"
        subnotes=""
        demo={<Demo2 />}
        subdesc="可以在分割线上自定义文本内容"
        path="divider/demo2"
      />

      <InstanceView
        subtitle="自定义样式"
        subnotes=""
        demo={<Demo3 />}
        subdesc="通过设置lineStyle来改变样式"
        path="divider/demo3"
      />

      <InstanceView
        subtitle="垂直分隔线"
        subnotes=""
        demo={<Demo4 />}
        subdesc="对不同段落的文本进行分割"
        path="divider/demo4"
      />

      <InstanceView
        subtitle="传入style改变样式"
        subnotes=""
        demo={<Demo5 />}
        subdesc="传入style改变样式"
        path="divider/demo5"
      />

      <Api />
    </>
  );
}
