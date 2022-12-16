/*
  @name:"Tag 标签"
  @group:"数据"
*/
import React from 'react';
import Title from '../../components/title';
import InstanceView from '../../layout/instanceView';
import Demo1 from '../../demo/tag/demo1';
import Demo2 from '../../demo/tag/demo2';
import Demo3 from '../../demo/tag/demo3';

import Api from '../../demo/tag/api';

export default function DemoPage() {
  return (
    <div>
      <Title title="Tag" notes="标签" desc="进行标记和分类的小标签" />
      <InstanceView
        subtitle="基本使用"
        subnotes=""
        demo={<Demo1 />}
        subdesc="Tag 组件基本使用示例。"
        path="tag/demo1"
      />
      <InstanceView
        subtitle="图标Tag"
        subnotes=""
        demo={<Demo2 />}
        subdesc="带有 icon 的 tag"
        path="tag/demo1"
      />
      <InstanceView
        subtitle="可关闭的Tag"
        subnotes=""
        demo={<Demo3 />}
        subdesc="带有 icon 的 tag"
        path="tag/demo1"
      />
      <Api />
    </div>
  );
}
