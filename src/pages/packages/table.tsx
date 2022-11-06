/*
  @name:"Table 表格"
  @group:"数据"
*/
import React from 'react';
import Title from '../../components/title';
import InstanceView from '../../layout/instanceView';
import Demo1 from '../../demo/table/demo1';

export default function TablePage() {
  return (
    <>
      <Title title="Table" notes="表格" desc="用于展示多条结构类似的数据" />
      <InstanceView
        subtitle="基本使用"
        subnotes=""
        demo={<Demo1 />}
        subdesc="基础的表格展示用法"
        path="table/demo1"
      />
    </>
  );
}
