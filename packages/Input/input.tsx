import React, { CSSProperties } from 'react';
import './style.scss';
import classNames from 'classnames';

export type inputProps = {
  style?: CSSProperties;
  className?: string;
  prefix?: string | React.ReactNode;
  suffix?: string | React.ReactNode;
  clearable?: boolean;
  clearableFn?: () => void;
  focus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  blur?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  value?: string | number;
  type?: string;
  showPassword?: boolean;
  status?: 'error' | 'warning'
};
function Input(props: inputProps): JSX.Element {
  const { style, className, prefix, suffix, clearable, clearableFn, focus, blur, onChange, placeholder, value, type, showPassword, status } = props;
  const [inputValue, setInputValue] = React.useState(value || '');
  const [pwdIcon, setPwdIcon] = React.useState('m-icon-hide');
  const [pwdShow, setPwdShow] = React.useState(showPassword); //
  const [inputType, setInputType] = React.useState(type);
  const innerClass = classNames({
    'mzl_input_inner': true,
    [`mzl_input_inner_${status}`]: true,
  })
  const inputClass = classNames({
    'mzl_input': true,
    [className || '']: !!className,
  });
  const inputStyle = {
    ...style,
  }
  React.useEffect(() => {
    setInputValue(value as string);
  }, [value])
  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChange && onChange(e);
  }
  const inputEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      setInputValue(e.target.value);
      onChange && onChange(e);
    }
  }
  const handlerClearClick = () => {
    setInputValue('');
    clearableFn && clearableFn();
  }
  const toggleIcon = () => {
    setPwdShow(!pwdShow);
    if (pwdShow) {
      setInputType(type);
      setPwdIcon('m-icon-hide');
    } else {
      setInputType('text');
      setPwdIcon('m-icon-browse');
    }
  }
  React.useEffect(() => {
    if (!showPassword) {
      setInputType(type);
      setPwdIcon('m-icon-hide');
    } else {
      setInputType('text');
      setPwdIcon('m-icon-browse');
    }

  }, [showPassword])
  return (
    <span className={innerClass} style={style || inputStyle}>
      {
        prefix && prefix !== '' && (typeof prefix) === 'string' ? <i className={[prefix, 'mzl_input_prefix'].join(' ')} /> : prefix && prefix !== '' && (typeof prefix) === 'object' ? <span className="mzl_input_prefix" >{prefix}</span> : null
      }
      <input
        type={inputType}
        placeholder={placeholder}
        className={inputClass}
        onChange={inputChange}
        onKeyDown={inputEnter}
        value={inputValue}
        onFocus={(e) => focus && focus(e)}
        onBlur={() => blur && blur()}
      />
      {
        suffix && suffix !== '' && (typeof suffix) === 'string' && !clearable ? <i className={[suffix, 'mzl_input_suffix'].join(' ')} /> : suffix && suffix !== '' && (typeof suffix) === 'object' ? <span className="mzl_input_suffix" >{suffix}</span> : null
      }
      {
        clearable && inputValue !== '' && type !== 'password' ? (
          <i className="m-icon-error mzl_input_suffix mzl_input_clearable" onClick={handlerClearClick} />
        ) : null
      }
      {
        type === 'password' ? (
          <i className={[pwdIcon, 'mzl_input_suffix', 'mzl_input_password'].join(' ')} onClick={toggleIcon} />
        ) : null
      }
    </span>
  );
}
Input.defaultProps = {
  style: '',
  className: '',
  prefix: '',
  suffix: '',
  clearable: false,
  clearableFn: () => { },
  focus: () => { },
  blur: () => { },
  onChange: () => { },
  placeholder: '',
  value: '',
  type: 'text',
  showPassword: false,
  status: '',
};
export default React.memo(Input);