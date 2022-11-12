/*
  @name:"Tooltip 文字提示"
  @group:"通用"
*/
import React from 'react';
import Title from '../../components/title';
import InstanceView from '../../layout/instanceView';
import Demo1 from '../../demo/tooltip/demo1';

export default function ToolTipPage() {
  return (
    <>
      <Title title="Demo" notes="示例" desc="文档集成示例" />
      <InstanceView
        subtitle="Demo"
        subnotes=""
        demo={<Demo1 />}
        subdesc="文档集成示例"
        path="tooltip/demo1"
      />
    </>
  );
}
