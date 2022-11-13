import React from 'react'
import Button from '../../../packages/Button'
import Confirm from '../../../packages/Confirm'
import Message from '../../../packages/Message'

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
