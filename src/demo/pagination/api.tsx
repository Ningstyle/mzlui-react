import React from 'react';
import { Table } from '../../../packages';

export default function Api() {
  const columns = [
    {
      title: '参数',
      field: 'arguments',
    },
    {
      title: '说明',
      field: 'description',
    },
    {
      title: '类型',
      field: 'type',
    },
    {
      title: '可选值',
      field: 'optional',
    },
    {
      title: '是否必填',
      field: 'required',
    },
    {
      title: '默认值',
      field: 'default',
      width: 80,
    },
  ];
  const dataSource = [
    {
      arguments: 'pageSize',
      description: '每页条数',
      type: 'number',
      optional: '-',
      default: 10,
      required: '否',
    },
    {
      arguments: 'onPageSizeChange',
      description: '每页条数改变时的回调',
      type: '(pageSize: number)=>void',
      optional: '-',
      default: 'undefined',
      required: '否',
    },
    {
      arguments: 'onPageChange',
      description: '页数改变时的回调',
      type: '(page: number)=>void',
      optional: '-',
      default: 'undefined',
      required: '否',
    },
    {
      arguments: 'total',
      description: '总共多少条',
      type: 'number',
      optional: '-',
      default: 'undefined',
      required: '是',
    },
    {
      arguments: 'style',
      description: '行内样式',
      type: <span style={{ color: '#c41d7f' }}>CSSProperties</span>,
      optional: '-',
      default: 'undefined',
      required: '否',
    },
    {
      arguments: 'className',
      description: '类名',
      type: 'string',
      optional: '-',
      default: 'undefined',
      required: '否',
    },
    {
      arguments: 'text',
      description: '文字描述',
      type: `{
        nextPage: string;
        prevPage: string;
        total: string;
        page: string;
        item: string;
      }`,
      optional: '-',
      default: 'undefined',
      required: '否',
    },
  ];
  return (
    <div style={{ width: '80%' }}>
      <p className="packagesSubTitle">API 说明</p>
      <Table columns={columns} dataSource={dataSource} size="middle" border />
    </div>
  );
}
