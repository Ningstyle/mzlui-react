import React from "react";
import { Image } from "../../../packages";

export default function Demo() {
  const src = "https://img0.baidu.com/it/u=1960352606,3294699366&fm=253&fmt=auto&app=120&f=JPEG?w=1200&h=675"
  return (
    <Image
      width="150px"
      height="150px"
      src={src} preview
    />
  )
}