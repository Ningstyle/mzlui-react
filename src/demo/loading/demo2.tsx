import React from "react";
import { Loading } from '../../../packages'

export default function Demo() {
  React.useEffect(() => {
    Loading.show({
      target: '.testLoading',
      text: '加载中...',
      background: 'rgba(0,0,0,0.2)',
    })
  }, [])
  return (
    <div className="testLoading" style={{ width: '100%', height: '500px', position: 'relative' }} />
  )
}