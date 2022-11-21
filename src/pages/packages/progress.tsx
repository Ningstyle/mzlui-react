/*
  @name:"Progress 进度条"
  @group:"数据"
*/
import React from 'react';
import Title from '../../components/title';
import InstanceView from '../../layout/instanceView';
import Demo1 from '../../demo/progress/demo1';
import Demo2 from '../../demo/progress/demo2';
import Api from '../../demo/progress/api';
import CircleApi from '../../demo/progress/apicircle';

export default function MessagePage() {
  return (
    <>
      <Title title="Progress" notes="进度条" desc="进度数据信息。" />
      <InstanceView
        subtitle="条形进度条示例"
        subnotes=""
        demo={<Demo1 />}
        subdesc="最基本的"
        path="progress/demo1"
      />
      <InstanceView
        subtitle="圆形进度条"
        subnotes=""
        demo={<Demo2 />}
        subdesc="不同的圆形进度条状态"
        path="progress/demo2"
      />
      <Api />

      <CircleApi />
    </>
  );
}
