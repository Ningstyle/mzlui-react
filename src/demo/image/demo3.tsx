import React from "react";
import { Space, Image } from "../../../packages";

export default function Demo() {
  const imgList = [
    'https://img1.baidu.com/it/u=47162254,1618159860&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800',
    'https://img0.baidu.com/it/u=1042709427,4147685100&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
    'https://img0.baidu.com/it/u=4189562873,1342857029&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800',
    'https://img0.baidu.com/it/u=3308057334,4059906751&fm=253&fmt=auto&app=120&f=JPEG?w=658&h=987',
    'https://img1.baidu.com/it/u=3713898695,3041023958&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800',
    'https://img1.baidu.com/it/u=1610481605,2160356402&fm=253&fmt=auto&app=120&f=JPEG?w=889&h=500',
    'https://img2.baidu.com/it/u=2641437459,1970317776&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'
  ]
  return (
    <Space>
      {
        imgList.map((item: any, index: number) => {
          return <Image
            width="150px"
            height="150px"
            src={item}
            preview
            key={index}
            previewList={imgList}
            toIndex={index}
          />
        })
      }
    </Space>
  )
}