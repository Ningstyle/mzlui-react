import React from 'react';
import { Table } from '../../../packages';

export default function Api() {
  // Tabs
  const columns: any = [
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
      width: 450,
    },
    {
      title: '默认值',
      field: 'default',
      width: 80,
    },
  ]
  const dataSource: any = [
    {
      arguments: 'defaultActiveKey',
      description: '初始化选中面板的 key',
      type: <span style={{ color: "#c41d7f" }}>number</span>,
      optional: '-',
      default: '0',
    },
    {
      arguments: 'className',
      description: '自定义Tabs类名',
      type: <span style={{ color: "#c41d7f" }}>string</span>,
      optional: '-',
      default: '-',
    },
    {
      arguments: 'type',
      description: 'Tabs页签的类型',
      type: <span style={{ color: "#c41d7f" }}>string</span>,
      optional: <span style={{ color: "#1890ff" }}>line | card</span>,
      default: 'line',
    },
    {
      arguments: 'onTabClick',
      description: 'tab 被点击时回调函数',
      type: <span style={{ color: "#c41d7f" }}>function(key: number)</span>,
      optional: '-',
      default: '-',
    }
  ]
  // TabsItem
  const columnsItem: any = [
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
      width: 450,
    },
    {
      title: '默认值',
      field: 'default',
      width: 80,
    },
  ]
  const dataSourceItem: any = [
    {
      arguments: 'disabled',
      description: '是否禁用',
      type: <span style={{ color: "#c41d7f" }}>boolean</span>,
      optional: <span style={{ color: "#1890ff" }}>true | false</span>,
      default: 'false',
    },
    {
      arguments: 'tab',
      description: '选项卡头显示文字',
      type: <span style={{ color: "#c41d7f" }}>ReactNode | string</span>,
      optional: '-',
      default: '-',
    }
  ]
  return (
    <div style={{ width: '80%' }}>
      <p className="packagesSubTitle">API 说明</p>
      <p className="packagesSubTitle">Tabs</p>
      {/* <p className="packagesSubNodes">API 说明</p> */}
      <Table columns={columns} dataSource={dataSource} size="middle" border />
      <p className="packagesSubTitle">TabsItem</p>
      {/* <p className="packagesSubNodes">API 说明</p> */}
      <Table columns={columnsItem} dataSource={dataSourceItem} size="middle" border />
    </div>
  );
}
