import React from "react";
import { Empty } from "../../../packages";

export default function Demo() {
  return (
    <Empty
      image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
      imageStyle={{ width: '150px', height: '100px' }}
      description={
        <span>没找到数据 <a href="https://www.baidu.com" target="_back">去百度找找</a></span>
      }
    />
  )
}