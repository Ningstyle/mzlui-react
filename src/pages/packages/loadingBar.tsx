/*
  @name:"LoadingBar 加载进度条"
  @group:"数据"
*/
import React from 'react';
import Title from '../../components/title';
import InstanceView from '../../layout/instanceView';
import Demo1 from '../../demo/loadingBar/demo1';
import Demo2 from '../../demo/loadingBar/demo2';
import Api from '../../demo/loadingBar/api';
import Api1 from '../../demo/loadingBar/api1';

export default function DemoPage() {
  return (
    <div>
      <Title title="LoadingBar" notes="加载进度条" desc="全局创建一个显示页面加载、异步请求、文件上传等的加载进度条。" />
      <InstanceView
        subtitle="基础使用"
        subnotes=""
        demo={<Demo1 />}
        subdesc="点击 Start 开始进度，点击 Finish 结束。在调用start()方法后，组件会自动模拟进度，当调用 finish() 或 error() 时，补全进度并自动消失"
        path="loadingBar/demo1"
      />
      <InstanceView
        subtitle="拓展配置"
        subnotes=""
        demo={<Demo2 />}
        subdesc="更多拓展配置"
        path="loadingBar/demo2"
      />
      <Api />
      <Api1 />
    </div>
  );
}