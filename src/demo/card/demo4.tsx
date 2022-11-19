import React from "react";
import { Space, Card } from "../../../packages";

export default function Demo() {
  return (
    <Space>
      <Card
        cover={
          <img
            src="https://tse3-mm.cn.bing.net/th/id/OIP-C.WlEfcCkZr7X99O0bNYfWkwHaEo?w=297&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt="封面图片"
          />
        }
      >
        <span>content</span>
      </Card>
    </Space>
  );
}
