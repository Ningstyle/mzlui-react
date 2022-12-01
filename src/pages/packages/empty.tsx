/*
  @name:"Empty 空状态"
  @group:"数据"
*/
import React from 'react';
import Title from '../../components/title';
import InstanceView from '../../layout/instanceView';
import Demo1 from '../../demo/empty/demo1';
import Demo2 from '../../demo/empty/demo2';
import Demo3 from '../../demo/empty/demo3';
import Api from '../../demo/empty/api';

export default function DemoPage() {
  return (
    <div>
      <Title title="Empty" notes="空状态" desc="空状态时的展示占位图。" />
      <InstanceView
        subtitle="基本使用"
        subnotes=""
        demo={<Demo1 />}
        subdesc="简单的展示。"
        path="empty/demo1"
      />
      <InstanceView
        subtitle="自定义"
        subnotes=""
        demo={<Demo2 />}
        subdesc="自定义文案和图片"
        path="empty/demo2"
      />
      <InstanceView
        subtitle="拓展使用"
        subnotes=""
        demo={<Demo3 />}
        subdesc="包括插槽、无描述等"
        path="empty/demo3"
      />
      <Api />
    </div>
  );
}