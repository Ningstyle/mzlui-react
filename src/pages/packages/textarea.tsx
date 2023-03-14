/*
  @name:"Textarea 文本域"
  @group:"通用"
*/
import React from 'react';
import InstanceView from '../../layout/instanceView';
import Title from '../../components/title';
import Demo1 from '../../demo/textarea/demo1';
import Demo2 from '../../demo/textarea/demo2';
import Demo3 from '../../demo/textarea/demo3';
import Demo4 from '../../demo/textarea/demo4';
import Api from '../../demo/textarea/api';


export default function TextareaPage() {
  return (
    <div>
       <Title title="TextArea" notes="多行文本" desc="可容纳多行文本的输入框" />
      <InstanceView
        subtitle="基本使用"
        subnotes=""
        demo={<Demo1 />}
        subdesc="textarea 基本使用"
        path="textarea/demo1"
      />
      <InstanceView
        subtitle="调整输入框的位置"
        subnotes=""
        demo={<Demo2 />}
        subdesc="可以设置输入框在父盒子内的位置：左，中间或右"
        path="textarea/demo2"
      />
      <InstanceView
        subtitle="设置输入框是否可调整大小"
        subnotes=""
        demo={<Demo3 />}
        subdesc="可设置输入框禁止调整大小，可水平方向调节，可垂直方向调节，垂直水平都可调节"
        path="textarea/demo3"
      />
      <InstanceView
        subtitle="设置提示文本"
        subnotes=""
        demo={<Demo4 />}
        subdesc="设置输入框提示文本"
        path="textarea/demo4"
      />
      <Api />
    </div>
  );
}
