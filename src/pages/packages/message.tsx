/*
  @name:"Message 全局提示"
  @group:"交互"
*/
import React from 'react';
import Title from '../../components/title';
import InstanceView from '../../layout/instanceView';
import Demo1 from '../../demo/message/demo1';
import Demo2 from '../../demo/message/demo2';
import Demo3 from '../../demo/message/demo3';
import Demo4 from '../../demo/message/demo4';

export default function MessagePage() {
  return (
    <>
      <Title title="Message" notes="全局提示" desc="全局展示操作反馈信息。" />
      <InstanceView
        subtitle="普通提示示例"
        subnotes=""
        demo={<Demo1 />}
        subdesc="最基本的提示，默认在3秒后消失。"
        path="message/demo1"
      />
      <InstanceView
        subtitle="其他提示类型"
        subnotes=""
        demo={<Demo2 />}
        subdesc="不同的提示状态：成功、警告、错误。"
        path="message/demo2"
      />
      <InstanceView
        subtitle="加载中"
        subnotes=""
        demo={<Demo3 />}
        subdesc="Loading 的状态，并异步在某个时机移除"
        path="message/demo3"
      />
      <InstanceView
        subtitle="自定义时长"
        subnotes=""
        demo={<Demo4 />}
        subdesc="自定义时长 10s，默认时长为 3s"
        path="message/demo4"
      />
    </>
  );
}
