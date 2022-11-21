/*
  @name:"Confirm 消息确认"
  @group:"反馈"
*/
import React from 'react'
import Title from '../../components/title';
import InstanceView from '../../layout/instanceView';
import Demo1 from '../../demo/confirm/demo1'
import Demo2 from '../../demo/confirm/demo2'
import Demo3 from '../../demo/confirm/demo3'
import Demo4 from '../../demo/confirm/demo4'
import Api from '../../demo/confirm/api';

export default function ConfirmPage() {
  return (
    <>
      <Title title="Confirm" notes="消息确认" desc="目标元素的操作需要用户进一步的确认时，弹出提示框，询问用户是否确认。" />
      <InstanceView
        subtitle="基本使用"
        subnotes=""
        demo={<Demo1 />}
        subdesc="Confirm 组件的基本使用。使用Confirm包裹组件，点击子组件时弹出提示框。"
        path="confirm/demo1"
      />
      <InstanceView
        subtitle="自定义使用"
        subnotes=""
        demo={<Demo2 />}
        subdesc="Confirm 组件接受自定义内容，以及成功，取消，失败的回调处理操作。"
        path="confirm/demo2"
      />
      <InstanceView
        subtitle="函数调用"
        subnotes=""
        demo={<Demo3 />}
        subdesc="Confirm 组件支持通过Confirm.info()函数调用的方式弹出提示框，可通过参数实现自定义。"
        path="confirm/demo3"
      />
      <InstanceView
        subtitle="处理异步任务"
        subnotes=""
        demo={<Demo4 />}
        subdesc="Confirm 组件处理异步任务。Confirm.info成功回调返回Promise时可以使用.then做回调处理或者.catch做失败处理。"
        path="confirm/demo4"
      />
      <Api />
    </>
  );
}
