import React from "react";
import { Space, Card, Button } from "../../../packages";

export default function Demo() {
  return (
    <Space>
      <Card
        cardTitle="default size"
        size="default"
        extraContent={<Button type="link">more</Button>}
        style={{ width: 300 }}
      >
        <p>content</p>
        <p>content</p>
        <p>content</p>
      </Card>
      <Card
        cardTitle="small size"
        size="small"
        extraContent={<Button type="link">more</Button>}
        style={{ width: 300 }}
      >
        <p>content</p>
        <p>content</p>
        <p>content</p>
      </Card>
    </Space>
  );
}
