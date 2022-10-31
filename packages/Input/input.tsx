import React, { useState } from 'react';
import './style.scss';
import classNames from 'classnames';

export type InputProps = {
    className?: string;
    children: React.ReactNode;
    placeholder?: string;
    disabled?: boolean;
    readOnly?: boolean;
    clearable?: boolean;
    maxlength?: number;
    minlength?: number;
    prefix?: React.ReactNode | string
    suffix?: React.ReactNode | string,
    onchange?: Function
};
function Input(props: InputProps): JSX.Element {
    const [value, setValue] = useState("")
    const [showclear, setShowclear] = useState(false)
    const { placeholder, className, children, disabled, readOnly, clearable, maxlength, minlength, prefix, suffix, onchange } = props;
    const InputClass = classNames({
        'mzl-input': true,
        [className || '']: !!className,
        'mzl-input-affix': prefix ? true : false,
        'mzl-input-disabled': disabled ? true : false
    });

    const changeclearState = (state: boolean): void => {
        if (value) {
            setShowclear(state)
        }

    }
    const clearText = (): void => {
        setValue("")
        setShowclear(false)
    }
    const onInput = ($event: any) => {
       
        let value = $event.target.value
        console.log(value)
        value ? setShowclear(true) : setShowclear(false)
        setValue(value)
    }
    const change = ($event: any) => {
        if (typeof onchange === 'function') {
            onchange && onchange($event.target.value, $event)
        } else {
            throw new Error("'onchange' is expected a function,but now it is not a function,Please check it!");

        }
    }
    const onPressEnter = ($event:any)=>{
        if($event.which===13||$event.keyCode===13){
            change($event)
        }
    }
    const clearIcon = (
        <span className='mzl-input_suffix' onClick={clearText}>
            <i className='m-icon-error'></i>
        </span>
    )
    const prefixIcon = (
        <span className='mzl-input_prefix'>{prefix}</span>
    )
    const suffixIcon = (
        <span className='mzl-input_suffix'>{suffix}</span>
    )
    return (
        <div className={InputClass} onMouseOver={() => changeclearState(true)} onMouseOut={() => changeclearState(false)}>
            {prefix ? prefixIcon : ''}
            <input maxLength={maxlength} minLength={minlength} className='mzl-input_inner' type='text' onChange={change} onInput={onInput} onKeyDown={onPressEnter} value={value} placeholder={placeholder} readOnly={readOnly} disabled={disabled}></input>
            {clearable && showclear ? clearIcon : suffixIcon ? suffixIcon : ''}
        </div>
    );
}
Input.defaultProps = {
    className: '',
    placeholder: '请输入',
    disabled: false,
    readOnly: false
};
export default Input;
