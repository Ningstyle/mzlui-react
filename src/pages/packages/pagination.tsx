/*
  @name:"Pagination 分页"
  @group:"数据"
*/
import React from 'react';
import Title from '../../components/title';
import InstanceView from '../../layout/instanceView';
import Demo1 from '../../demo/pagination/demo1';
import Demo2 from '../../demo/pagination/demo2';
import Api from '../../demo/pagination/api';

export default function IconPage() {
  return (
    <>
      <Title
        title="Pagination"
        notes="分页"
        desc="采用分页的形式分隔长列表，每次只加载一个页面"
      />
      <InstanceView
        subtitle="使用方法"
        subnotes=""
        demo={<Demo1 />}
        path="pagination/demo1"
      />
      <InstanceView
        subtitle="其他属性和方法"
        subnotes=""
        demo={<Demo2 />}
        path="pagination/demo2"
      />
      <Api />
    </>
  );
}
