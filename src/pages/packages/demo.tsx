/*
  @name:"Demo 示例"
  @group:"示例"
*/
import React from 'react';
import Title from '../../components/title';
import InstanceView from '../../layout/instanceView';
import Demo1 from '../../demo/button/demo1';

export default function DemoPage() {
  return (
    <div>
      <Title title="Demo" notes="示例" desc="文档集成示例" />
      <InstanceView
        subtitle="Demo"
        subnotes=""
        demo={<Demo1 />}
        subdesc="文档集成示例"
        path="button/demo1"
      />
    </div>
  );
}