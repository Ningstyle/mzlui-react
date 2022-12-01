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
      <Title title="Input" notes="输入框" desc="通过鼠标或键盘输入内容，是最基础的表单域的包装。" />
      <InstanceView
        subtitle="基本使用"
        subnotes=""
        demo={<Demo1 />}
        subdesc="Input 输入框的基本使用"
        path="Input/demo1"
      />
      {/* <InstanceView
        subtitle="密码输入框"
        subnotes=""
        demo={<Demo2 />}
        subdesc="密码输入框"
        path="Input/demo2"
      /> */}
    </div>
  );
}
