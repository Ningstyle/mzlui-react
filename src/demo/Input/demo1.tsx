import React from 'react';
import { Input } from '../../../packages';

export default function Demo1() {
    const input_w = {
        width: '224px',
    }
    const settingIcon = (
        <i className='m-icon-setting'></i>
    )
    const searchIcon = (
        <i className='m-icon-search'></i>
    )
    const onchange=(value,event)=>{
        console.log(value)
    }
    return (
        <div style={input_w}>
            <Input clearable className='input-w' prefix={settingIcon} suffix={searchIcon} onchange={onchange}/>
        </div>

    )
}
