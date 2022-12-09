import React from "react";
import { Space, Button } from '../../../packages';

export default function Demo() {
  return (
    <>
      <Space gap="20px" direction="vertical" align="center">
        <Button>按钮</Button>
        <Button>按钮</Button>
        <Button>按钮</Button>
        <Button>按钮</Button>
        <Button>按钮</Button>
        <Button>按钮</Button>
      </Space>
      <Space gap="20px" align="center">
        <Button>按钮</Button>
        <Button>按钮</Button>
        <Button>按钮</Button>
        <Button>按钮</Button>
        <Button>按钮</Button>
        <Button>按钮</Button>
      </Space>
    </>
  )
}