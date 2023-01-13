import React from "react";
import { Image } from "../../../packages";

export default function Demo() {
  const fits = ['cover', 'contain', 'fill', 'none', 'scale-down']
  const src = "https://img2.baidu.com/it/u=2745938939,87326468&fm=253&fmt=auto&app=120&f=JPEG?w=1024&h=640"
  return (
    <div style={{ display: 'flex' }}>
      {fits.map((item: any, index: number) => {
        return <div style={{ marginRight: '20px', width: '100px' }} key={index}>
          <p style={{ textAlign: 'center' }}>{item}</p>
          <Image width="100px" height="100px" src={src} fit={item} />
        </div>
      })}
    </div>

  )
}