/*
  @name:"Alert 警告提示"
  @group:"交互"
*/
import React from "react";

import Title from '../../components/title';
import InstanceView from '../../layout/instanceView';
import Demo1 from '../../demo/alert/demo1';
import Demo2 from "../../demo/alert/demo2";
import Demo3 from "../../demo/alert/demo3";
import Demo4 from "../../demo/alert/demo4";
import Demo5 from "../../demo/alert/demo5";
import Api from '../../demo/alert/api';

export default function AlertPage () {
  return (
    <>
      <Title title="Alert" notes="警告提示" desc="警告提示，展现需要关注的信息。" />
      <InstanceView
        subtitle="基本"
        subnotes=""
        demo={<Demo1 />}
        subdesc="最基本的用法，适用于简短的警告提示。"
        path="alert/demo1"
      />
      <InstanceView
        subtitle="四种样式"
        subnotes=""
        demo={<Demo2 />}
        subdesc="共有四种样式 success、info、warning、error。"
        path="alert/demo2"
      />
      <InstanceView
        subtitle="图标"
        subnotes=""
        demo={<Demo3 />}
        subdesc="带图标的警告信息提示"
        path="alert/demo3"
      />
      <InstanceView
        subtitle="可关闭的警告提示"
        subnotes=""
        demo={<Demo4 />}
        subdesc="显示关闭按钮，点击可关闭警告提示。"
        path="alert/demo4"
      />
      <InstanceView
        subtitle="含有辅助性文字"
        subnotes=""
        demo={<Demo5 />}
        subdesc="含有辅助性文字介绍的警告提示。"
        path="alert/demo5"
      />
      <Api />
    </>
  )
}