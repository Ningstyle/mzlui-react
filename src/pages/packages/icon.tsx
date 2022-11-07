/*
  @name:"Icon 图标"
  @group:"常规"
*/
import React from 'react';
import Title from '../../components/title';
import InstanceView from '../../layout/instanceView';
import Demo1 from '../../demo/icon/demo1';
import Demo2 from '../../demo/icon/demo2';

export default function IconPage() {
  return (
    <>
      <Title title="Icon" notes="图标" desc="语义化的矢量图形，提供了 190 多个常用的 icon 图标" />
      <InstanceView
        subtitle="使用方法"
        subnotes="给元素设置类名 m-icon-iconName 即可。"
        demo={<Demo1 />}
        showCopy={false}
        showView={false}
        showCode
        path="icon/demo1"
      />
      <Demo2 />
    </>
  );
}
