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
import Demo6 from '../../demo/notification/demo6';
import Demo7 from '../../demo/notification/Demo7';
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
      <InstanceView
        subtitle="自动关闭的延时"
        subnotes=""
        demo={<Demo3 />}
        subdesc="自定义通知框自动关闭的延时，默认 4.5s，取消自动关闭只要将duration设为 0或null 即可。"
        path="notification/demo3"
      />
      {/* <InstanceView
        subtitle="带有图标的通知提醒框"
        subnotes=""
        demo={<Demo4 />}
        subdesc="通知提醒框左侧有图标。"
        path="notification/demo4"
      /> */}
      <InstanceView
        subtitle="自定义按钮"
        subnotes=""
        demo={<Demo5 />}
        subdesc="使用btn自定义关闭按钮的样式和文字。"
        path="notification/demo5"
      />
      <InstanceView
        subtitle="自定义图标"
        subnotes=""
        demo={<Demo6 />}
        subdesc="图标可以被自定义"
        path="notification/demo6"
      />
      <InstanceView
        subtitle="自定义样式"
        subnotes=""
        demo={<Demo7 />}
        subdesc="使用 style 和 className 来定义样式。"
        path="notification/demo7"
      />
      <Api />
    </>
  );
}
