/*
  @name:"Table 表格"
  @group:"数据"
*/
import React from 'react';
import Title from '../../components/title';
import InstanceView from '../../layout/instanceView';
import Demo1 from '../../demo/table/demo1';
import Demo2 from '../../demo/table/demo2';
import API from '../../demo/table/api';
import API1 from '../../demo/table/api1';

export default function TablePage() {
  return (
    <>
      <Title title="Table" notes="表格" desc="用于展示多条结构类似的数据" />
      <InstanceView
        subtitle="基本使用"
        subnotes=""
        demo={<Demo1 />}
        subdesc="基础的表格展示用法（待基础组件完成后继续集成）"
        path="table/demo1"
      />
      <InstanceView
        subtitle="显示边框"
        subnotes=""
        demo={<Demo2 />}
        subdesc="设置border属性为true，即可显示边框"
        path="table/demo2"
      />
      <API />
      <API1 />
    </>
  );
}
