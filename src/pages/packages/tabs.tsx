/*
  @name:"Tabs 标签页"
  @group:"数据"
*/
import React from 'react';
import Title from '../../components/title';
import InstanceView from '../../layout/instanceView';
import Demo1 from '../../demo/tabs/demo1';
import Demo2 from '../../demo/tabs/demo2';
import Demo3 from '../../demo/tabs/demo3';
import Api from '../../demo/tabs/api';

export default function TabsPage() {
    return (
        <>
            <Title title="Tabs" notes="标签页" desc="网页常用 tabs 标签页，常用于选项卡切换组件。" />
            <InstanceView
                subtitle="基本使用"
                subnotes=""
                demo={<Demo1 />}
                subdesc="tabs 按钮的基本使用。默认选中第一项，默认的type是line。"
                path="tabs/demo1"
            />
            <InstanceView
                subtitle="禁用TabItem"
                subnotes=""
                demo={<Demo2 />}
                subdesc="禁用某一项。"
                path="tabs/demo2"
            />
            <InstanceView
                subtitle="卡片式页签"
                subnotes=""
                demo={<Demo3 />}
                subdesc=" type为card类型的tabs页签。"
                path="tabs/demo3"
            />
            <Api />
        </>
    );
}