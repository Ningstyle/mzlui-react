import React from 'react';
import { Table, Button, Message } from '../../../packages';

export default function Demo() {
  const columns: any = [
    {
      title: '姓名',
      field: 'name',
      align: 'left',
    },
    {
      title: '年龄',
      field: 'age',
    },
    {
      title: '性别',
      field: 'six',
    },
    {
      title: '学历',
      field: 'gon',
    },
    {
      title: '住址',
      field: 'add',
      width: 300,
      ellipsis: true,
    },
    {
      title: '操作',
      field: '',
      align: 'center',
      render: (text: any) => <Button size="small" type="link" onClick={() => { Message.info(`你点击的这个人叫${text.name}`) }}>操作</Button>,
    },
  ]
  const dataSource: any = [
    {
      name: '张三',
      age: 18,
      six: '男',
      gon: '本科',
      add: '北京市朝阳区北京市朝阳区北京市朝阳区北京市朝阳区北京市朝阳区北京市朝阳区北京市朝阳区北京市朝阳区北京市朝阳区北京市朝阳区北京市朝阳区北京市朝阳区',
    },
    {
      name: '李四',
      age: 18,
      six: '男',
      gon: '本科',
      add: '北京市朝阳区',
    },
    {
      name: '王五',
      age: 18,
      six: '女',
      gon: '硕士',
      add: '北京市朝阳区',
    },
  ]
  // headStyle={{ background: '#bae0ff' }}
  return (
    <Table columns={columns} dataSource={dataSource} border />
  );
}
