/*
  @name:"Image 图片"
  @group:"数据"
*/
import React from 'react';
import Title from '../../components/title';
import InstanceView from '../../layout/instanceView';
import Demo1 from '../../demo/image/demo1';
import Demo2 from '../../demo/image/demo2';
import Demo3 from '../../demo/image/demo3';
import Api from '../../demo/image/api';

export default function DemoPage() {
  return (
    <div>
      <Title title="Image" notes="图片" desc="图片容器" />
      <InstanceView
        subtitle="基本使用"
        subnotes=""
        demo={<Demo1 />}
        subdesc=""
        path="image/demo1"
      />
      <InstanceView
        subtitle="图片预览"
        subnotes=""
        demo={<Demo2 />}
        subdesc="设置preview属性为true，点击图片即可预览"
        path="image/demo2"
      />
      <InstanceView
        subtitle="多图预览"
        subnotes=""
        demo={<Demo3 />}
        subdesc="设置previewList数组即可实现多图预览"
        path="image/demo3"
      />
      <Api />
    </div>
  );
}