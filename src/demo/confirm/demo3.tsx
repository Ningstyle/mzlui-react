import React from 'react'
import {Button,Confirm} from '../../../packages'

export default function Demo3() {
  function callback(){
    Confirm.info()
  }
  return (
    <Button onClick={()=>callback()}>
        函数式调用
    </Button>
  )
}
