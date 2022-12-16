import React from "react";
import { Empty, Button } from "../../../packages";

export default function Demo() {
  return (
    <Empty
      description={false}
    >
      <Button type="primary">没有数据，点击新建</Button>
    </Empty>
  )
}