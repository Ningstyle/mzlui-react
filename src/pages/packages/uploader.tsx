/*
  @name:"Uploader 上传组件"
  @group:"数据录入"
*/
import React from 'react';

import Title from '../../components/title';
import InstanceView from '../../layout/instanceView';
import Demo1 from '../../demo/uploader/demo1';
import Demo2 from '../../demo/uploader/demo2';
import Api from '../../demo/uploader/api';
import UploadFile from '../../demo/uploader/UploadFile';

export default function AlertPage() {
  return (
    <>
      <Title title="Uploader" notes="上传组件" desc="用于拖拽和点击上传文件" />
      <InstanceView
        subtitle="基本"
        subnotes=""
        demo={<Demo1 />}
        subdesc="最基本的用法，适用于简单上传。"
        path="uploader/demo1"
      />

      <InstanceView
        subtitle="用户头像"
        subnotes=""
        demo={<Demo2 />}
        subdesc="点击上传用户头像，并使用 beforeUpload 限制用户上传的图片格式和大小"
        path="uploader/demo2"
      />
      <Api />
      <UploadFile />
    </>
  );
}
