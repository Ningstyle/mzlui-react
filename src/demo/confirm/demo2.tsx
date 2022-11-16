import React from 'react'
import {Button,Confirm,Message} from '../../../packages'

export default function Demo2() {
  return (
    <Confirm 
      cancelCallback={()=>{Message.error('取消了')}}
      confirmCallback={()=>{Message.success('确认')}}
      title="自定义"
      text="看看我发现了什么"
      closeShow={false}
      icon="m-icon-smile"
    >
      <Button>自定义</Button>
    </Confirm>
  )
}
