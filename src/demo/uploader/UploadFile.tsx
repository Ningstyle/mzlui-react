import React from 'react';
import { Table } from '../../../packages';

export default function Api() {
  const columns = [
    {
      title: '字段',
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
  ];
  const dataSource = [
    {
      arguments: 'name',
      description: '文件名',
      type: 'string',
      optional: '-',
    },
    {
      arguments: 'progress',
      description: '上传进度, 0~1',
      type: 'number',
      optional: '-',
    },
    {
      arguments: 'status',
      description: '上传状态，不同状态展示颜色也会有所不同',
      type: 'string',
      optional: 'error | success | done | uploading',
    },
    {
      arguments: 'uid',
      description: '唯一标识符，不设置时会自动生成',
      type: 'string',
      optional: '-',
    },
    {
      arguments: 'errorInfo',
      description: '上传文件出错时的错误描述',
      type: 'string',
      optional: '-',
    },
    {
      arguments: 'originFileObj',
      description: '原始文件描述符',
      type: 'File',
      optional: '-',
    },
  ];
  return (
    <div style={{ width: '80%' }}>
      <p className="packagesSubTitle">UploadFile 类型说明</p>
      <Table columns={columns} dataSource={dataSource} size="middle" border />
    </div>
  );
}
