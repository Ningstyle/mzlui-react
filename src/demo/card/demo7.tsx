import React from "react";
import { Space, Card, Button } from "../../../packages";

export default function Demo() {
  return (
    <Space>
      <Card
        cardTitle="自定义actions"
        actions={[
          <Button type="text" key="btn1" icon="m-icon-edit" />,
          <Button type="text" key="btn2" icon="m-icon-copy" />,
          <Button type="text" key="btn3" icon="m-icon-setting" />,
        ]}
        style={{ width: 300 }}
      >
        <p>content</p>
        <p>content</p>
      </Card>
    </Space>
  );
}
