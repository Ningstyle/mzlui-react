import React from "react";
import { Loading, Button } from '../../../packages'

export default function Demo() {
  const handlerClick = () => {
    Loading.show()
    setTimeout(() => {
      Loading.close()
    }, 3000)
  }
  return (
    <Button type="primary" onClick={handlerClick}>点击加载</Button>
  )
}