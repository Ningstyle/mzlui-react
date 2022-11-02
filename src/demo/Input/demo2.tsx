import React from 'react';
import { Input } from '../../../packages';

export default function Demo2() {
    const input_w = {
        width: '224px',
    }
    return (
        <div style={input_w}>
            <Input  className='input-w' showpassword/>
        </div>

    )
}
