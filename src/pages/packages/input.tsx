/*
  @name:"Input 输入框"
  @group:"通用"
*/
import React from 'react';
import Title from '../../components/title';
import InstanceView from '../../layout/instanceView';
import Demo1 from '../../demo/Input/demo1';
import Demo2 from '../../demo/Input/demo2';
import Demo3 from '../../demo/Input/demo3';
import Demo4 from '../../demo/Input/demo4';
import Demo5 from '../../demo/Input/demo5';

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
      <InstanceView
        subtitle="可清空的输入框"
        subnotes=""
        demo={<Demo2 />}
        subdesc="通过clearable属性控制是否显示清除按钮"
        path="Input/demo2"
      />
      <InstanceView
        subtitle="配置图标"
        subnotes=""
        demo={<Demo3 />}
        subdesc="通过prefix和suffix属性配置前置和后置图标"
        path="Input/demo3"
      />
      <InstanceView
        subtitle="密码输入框"
        subnotes=""
        demo={<Demo4 />}
        subdesc="密码输入框,通过showPassword属性控制是否显示密码"
        path="Input/demo4"
      />
      <InstanceView
        subtitle="状态校验"
        subnotes=""
        demo={<Demo5 />}
        subdesc="设置status属性为error或warning,会校验输入框的状态"
        path="Input/demo5"
      />
    </div>
  );
}
