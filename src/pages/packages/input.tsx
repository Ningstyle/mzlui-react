/*
  @name:"Input 输入框"
  @group:"通用"
*/
import React from 'react';
import Title from '../../components/title';
import InstanceView from '../../layout/instanceView';
import Demo1 from '../../demo/Input/demo1';
import Demo2 from '../../demo/Input/demo2';

export default function InputPage() {
  return (
    <div>
      <Title title="Input" notes="输入框" desc="网页常用 Input 按钮，常用于响应一个事件或处理某个逻辑。" />
      <InstanceView
        subtitle="基本使用"
        subnotes=""
        demo={<Demo1 />}
        subdesc="Input 按钮的基本使用"
        path="Input/demo1"
      />
      <InstanceView
        subtitle="密码输入框"
        subnotes=""
        demo={<Demo2 />}
        subdesc="密码输入框"
        path="Input/demo2"
      />
    </div>
  );
}
