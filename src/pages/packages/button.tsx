import React from 'react';
import Title from '../../components/title';
import InstanceView from '../../layout/instanceView';
import Demo2 from '../../demo/button/demo2';

export default function ButtonPage() {
  return (
    <div>
      <Title title="Button" notes="按钮" desc="网页常用 button 按钮，常用于响应一个事件或处理某个逻辑。" />
      <InstanceView
        subtitle="基本使用"
        subnotes=""
        demo={<Demo2 />}
        subdesc="button 按钮的基本使用"
        path="button/demo2"
      />
    </div>
  );
}
