import React, { CSSProperties } from 'react';
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
      arguments: 'accept',
      description: '接受上传的文件类型',
      type: 'string',
      optional: '-',
      default: '',
      required: 'false',
    },
    {
      arguments: 'action',
      description: '上传的地址',
      type: 'string',
      optional: '-',
      default: '/',
      required: 'true',
    },
    {
      arguments: 'beforeUpload',
      description:
        '上传文件之前的钩子，参数为上传的文件，若返回 false 则停止上传。支持返回一个 Promise 对象，Promise 对象 reject 时则停止上传，resolve 时开始上传（ resolve 传入 File 或 Blob 对象则上传 resolve 传入对象）',
      type: '(file, fileList) => boolean | Promise<File> | undefined',
      optional: '-',
      default: 'undefined',
      required: 'false',
    },
    {
      arguments: 'customRequest',
      description: '通过覆盖默认的上传行为，可以自定义自己的上传实现',
      type: 'function',
      optional: '-',
      default: 'undefined',
      required: 'false',
    },
    {
      arguments: 'data',
      description: '上传所需额外参数或返回上传额外参数的方法',
      type: 'object|(file) => object | Promise<object>',
      optional: '-',
      default: 'undefined',
      required: 'false',
    },
    {
      arguments: 'defaultFileList',
      description: '默认已经上传的文件列表',
      type: 'object[]',
      optional: '-',
      default: 'undefined',
      required: 'false',
    },
    {
      arguments: 'disabled',
      description: '是否禁用',
      type: 'boolean',
      optional: 'true | false',
      default: 'false',
      required: 'false',
    },
    {
      arguments: 'headers',
      description: '设置上传的请求头部，IE10 以上有效',
      type: 'object',
      optional: '-',
      default: 'undefined',
      required: 'false',
    },
    {
      arguments: 'name',
      description: '发到后台的文件参数名',
      type: 'string',
      optional: '-',
      default: 'file',
      required: 'false',
    },
    {
      arguments: 'showUploadList',
      description: '是否展示文件列表,',
      type: 'boolean',
      optional: 'true | false',
      default: 'true',
      required: 'false',
    },
    {
      arguments: 'onChange',
      description: '上传文件改变时的回调',
      type: 'function',
      optional: '-',
      default: '',
      required: 'false',
    },
    {
      arguments: 'onRemove',
      description:
        '点击移除文件时的回调, 返回值为 false 时不移除。支持返回一个 Promise 对象，Promise 对象 resolve(false) 或 reject 时不移除 ',
      type: 'function',
      optional: '-',
      default: '',
      required: 'false',
    },
  ];
  return (
    <div style={{ width: '80%' }}>
      <p className="packagesSubTitle">API 说明</p>
      <Table columns={columns} dataSource={dataSource} size="middle" border />
    </div>
  );
}
