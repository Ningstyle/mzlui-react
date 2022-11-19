/*
  @name:"Card 卡片"
  @group:"通用"
*/

import React from "react";
import Title from "../../components/title";
import InstanceView from "../../layout/instanceView";
import Api from "../../demo/card/api";
import Demo1 from "../../demo/card/demo1";

export default function CardPage() {
  return (
    <>
      <Title title="Card" notes="卡片" desc="常规的卡片容器，可以承载标题、段落、图片、列表等内容。" />
      <InstanceView
        subtitle="基本使用"
        subnotes=""
        demo={<Demo1 />}
        subdesc="基础卡片包含标题、内容等部分。"
        path="card/demo1"
      />
      <Api />
    </>
  );
}
