import React, { CSSProperties, useState } from 'react';
import classNames from 'classnames';
import './style.scss'

export interface TextAreaProps {
    style?: CSSProperties
    cols?: number
    rows?: number
    resize?: 'both' | 'horizontal' | 'vertical' | 'none'
    placeholder?: string
    autoFocus?: boolean
    position?: 'left' | 'right' | 'middle'
    onTextAreaInput?: React.FormEventHandler<HTMLTextAreaElement>


}
 function TextArea(props: TextAreaProps) {
    const [value, setValue] = useState('')

    const { cols, rows = 10, style, resize, placeholder, autoFocus, position, onTextAreaInput } = props
    const textAreaPostion = {
        left: '0 auto 0 0',
        middle: '0 auto',
        right: '0 0 0 auto'
    }
    const TextAreaStyle = {
        // width: '80%',
        display: 'flex',
        margin: position&&textAreaPostion[position],
        maxWidth:'100%',
        ...style,
        resize: resize && resize
    }

    const textAreaCalss = classNames('mzl_textarea', {
        [`mzl_textarea`]: true

    });
    return (

        <textarea 
        value={value} 
        onInput={(e: React.ChangeEvent<HTMLTextAreaElement>) => { 
            setValue(e.target.value); 
            onTextAreaInput ? onTextAreaInput(e) : () => { } 
        }} 
        className={textAreaCalss} 
        autoFocus={autoFocus} 
        placeholder={placeholder} 
        style={TextAreaStyle} 
        cols={cols} 
        rows={rows}
        />

    )
}
// 为组件可选属性添加默认值
TextArea.defaultProps = {
    style: '',
    cols: 30,
    rows: 10,
    resize: 'both',
    placeholder: '',
    autoFocus: false,
    position: 'middle',
    onTextAreaInput: () => { }
}

export default React.memo(TextArea)