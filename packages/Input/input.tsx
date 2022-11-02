import React, { useState } from 'react';
import './style.scss';
import classNames from 'classnames';

export type InputProps = {
    type?: string;
    className?: string;
    placeholder?: string;
    disabled?: boolean;
    readOnly?: boolean;
    clearable?: boolean;
    showpassword?: boolean;
    maxlength?: number;
    minlength?: number;
    prefix?: React.ReactNode | string
    suffix?: React.ReactNode | string,
    onchange?: (value: string, event: any) => void
};
// function Input(props: InputProps): JSX.Element
const Input: React.FC = (props: InputProps) => {
    const [value, setValue] = useState("")
    const [showclear, setShowclear] = useState(false)
    const [passwordVisible, setpasswordVisible] = useState(true)
    const {
        type,
        placeholder,
        className,
        disabled,
        readOnly,
        clearable,
        maxlength,
        minlength,
        prefix,
        suffix,
        showpassword,
        onchange } = props;
    const InputClass = classNames({
        'mzl-input': true,
        [className || '']: !!className,
        'mzl-input-affix': prefix,
        'mzl-input-disabled': disabled
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
        const inputvalue = $event.target.value
        if (inputvalue) {
            setShowclear(true)
        } else {
            setShowclear(false)
        }
        setValue(inputvalue)
    }
    const change = ($event: any) => {
        if (typeof onchange === 'function') {
            if (onchange) {
                onchange($event.target.value, $event)
            }
        } else {
            throw new Error("'onchange' is expected a function,but now it is not a function,Please check it!");

        }
    }
    const onPressEnter = ($event: any) => {
        if ($event.which === 13 || $event.keyCode === 13) {
            change($event)
        }
    }
    const clearIcon = (
        <span className="mzl-input_suffix" onClick={clearText}>
            <i className="m-icon-error" />
        </span>
    )
    const prefixIcon = (
        <span className="mzl-input_prefix">{prefix}</span>
    )
    const suffixIcon = (
        <span className="mzl-input_suffix">{suffix}</span>
    )
    const viewIcon = (
        <span className="mzl-input_suffix" onClick={() => changepasswordVisible(false)}>
            <i className="m-icon-browse" />
        </span>
    )
    const cantviewIcon = (
        <span className="mzl-input_suffix" onClick={() => changepasswordVisible(true)}>
            <i className="m-icon-hide" />
        </span>
    )
    const changepasswordVisible=(state:boolean):void=>{
        setpasswordVisible(state)
    }
    let IconFix: string | React.ReactNode = ''
    if (showpassword) {
        IconFix = viewIcon
    } else {
        if (clearable && showclear) {
            IconFix = clearIcon
        } else if (suffixIcon) {
            IconFix = suffixIcon
        } else {
            IconFix = ""
        }
    }

    return (
        <span
            className={InputClass}
            onMouseOver={() => changeclearState(true)}
            onMouseOut={() => changeclearState(false)}
            onFocus={() => 0}
            onBlur={() => 0}
        >
            {prefix ? prefixIcon : ''}
            <input
                maxLength={maxlength}
                minLength={minlength}
                className="mzl-input_inner"
                type={showpassword ? (passwordVisible ? 'text' : "password") : type}
                onChange={change}
                onInput={onInput}
                onKeyDown={onPressEnter}
                value={value}
                placeholder={placeholder}
                readOnly={readOnly}
                disabled={disabled}
            />
            {showpassword?(passwordVisible?viewIcon:cantviewIcon):IconFix}
        </span>
    );
}
Input.defaultProps = {
    type: 'text',
    className: '',
    placeholder: '请输入',
    disabled: false,
    readOnly: false,
    clearable: false,
    showpassword: false,
    maxlength: 100000,
    minlength: 0,
    prefix: '',
    suffix: '',
    onchange: () => { },
};
export default Input;
