import React from 'react';
import { Tabs } from '../../../packages';

const { TabsItem } = Tabs;

export default function Demo() {

  return (
    <Tabs defaultActiveKey={1}>
      <TabsItem tab="Tab 1">Content of Tab Item 1</TabsItem>
      <TabsItem tab="Tab 2">Content of Tab Item 2</TabsItem>
      <TabsItem tab="Tab 3" disabled>
        Content of Tab Item 3
      </TabsItem>
    </Tabs>
  )
}
