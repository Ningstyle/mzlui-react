/*
  @name:"Notification 通知提醒框"
  @group:"反馈"
*/
import React from 'react';
import Title from '../../components/title';
import InstanceView from '../../layout/instanceView';
import Demo1 from '../../demo/notification/demo1';
import Demo2 from '../../demo/notification/demo2';
import Demo3 from '../../demo/notification/demo3';
import Demo4 from '../../demo/notification/demo4';
import Demo5 from '../../demo/notification/demo5';
import Api from '../../demo/notification/api';

export default function NotificationPage() {
  return (
    <>
      <Title
        title="Notification"
        notes="通知提醒框"
        desc="全局展示通知提醒信息。"
      />
      <InstanceView
        subtitle="基本使用"
        subnotes=""
        demo={<Demo1 />}
        subdesc="最简单的用法, 4.5 秒后自动关闭。"
        path="notification/demo1"
      />
      <InstanceView
        subtitle="不同的弹出位置"
        subnotes=""
        demo={<Demo2 />}
        subdesc="可以通过设置placement属性来控制弹出的位置。"
        path="notification/demo2"
      />
      <Api />
    </>
  );
}
