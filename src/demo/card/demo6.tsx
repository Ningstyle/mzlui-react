import React from "react";
import { Space, Card } from "../../../packages";

export default function Demo() {
  return (
    <Space>
      <Card cardTitle="始终显示阴影" shadows="always" style={{ width: 280 }}>
        <p>content</p>
        <p>content</p>
        <p>content</p>
      </Card>
      <Card cardTitle="鼠标移上时显示阴影" shadows="hover" style={{ width: 280 }}>
        <p>content</p>
        <p>content</p>
        <p>content</p>
      </Card>
      <Card cardTitle="无阴影卡片" style={{ width: 280 }}>
        <p>content</p>
        <p>content</p>
        <p>content</p>
      </Card>
    </Space>
  );
}
