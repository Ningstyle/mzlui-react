/*
  @name:"Image 图片"
  @group:"通用"
*/
import React from 'react';
import Title from '../../components/title';
import InstanceView from '../../layout/instanceView';
import Demo1 from '../../demo/image/demo1';
import Api from '../../demo/image/api';

export default function InputPage() {
  return (
    <div>
      <Title title="Image" notes="图片" desc="图片容器。" />
      <InstanceView
        subtitle="基本使用"
        subnotes=""
        demo={<Demo1 />}
        subdesc="可通过fit确定图片如何适应到容器框，同原生 object-fit。"
        path="image/demo1"
      />
      <Api />
    </div>
  );
}
