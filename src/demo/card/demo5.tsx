import React from "react";
import { Space, Card } from "../../../packages";

export default function Demo() {
  return (
    <Space>
      <Card cardTitle="outer Card" style={{ width: 450 }}>
        <Card cardTitle="inner Card" cardType="inner" style={{ width: 420 }}>
          <p>content</p>
          <p>content</p>
        </Card>
        <Card cardTitle="inner Card" cardType="inner" style={{ width: 420 }}>
          <p>content</p>
          <p>content</p>
        </Card>
      </Card>
    </Space>
  );
}
