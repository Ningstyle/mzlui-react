import React from 'react'
import Button from '../../../packages/Button'
import Confirm from '../../../packages/Confirm'

export default function Demo2() {
  return (
    <Confirm 
      cancelCallback={()=>{console.log('取消')}}
      confirmCallback={()=>{console.log('确认')}}
      title="自定义"
      text="看看我发现了什么"
      closeShow={false}
      icon="m-icon-smile"
    >
      <Button>自定义</Button>
    </Confirm>
  )
}
