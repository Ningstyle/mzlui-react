import React, { useState } from 'react';
import { Space, Button } from '../../../packages';

export default function Demo() {
  const [loading, setLoading] = useState<boolean>(false)
  const clickMe = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }
  return (
    <Space>
      <Button loading>加载中</Button>
      <Button type="primary" loading >
        加载中
      </Button>
      <Button
        icon="m-icon-search"
        round
        loading={loading}
        onClick={clickMe}
      >点击我</Button>
      <Button
        type="primary"
        round
        icon="m-icon-setting"
        loading={loading}
        onClick={clickMe}
      />
    </Space>
  )
}
