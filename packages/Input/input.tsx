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
	defaultValue?: string;
	value?: string;
	type?: 'text' | 'password' | 'email';
};
function Input(props: inputProps): JSX.Element {
	const { style, className, prefix, suffix, clearable, clearableFn, focus, blur, onChange, placeholder, defaultValue, value, type } = props;
	const [inputValue, setInputValue] = React.useState(defaultValue || '');
	const inputClass = classNames({
		'mzl_input': true,
		[className || '']: !!className,
	});
	const inputStyle = {
		...style,
	}
	React.useEffect(() => {
		setInputValue(value as string || defaultValue as string);
	}, [value])
	const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
		onChange && onChange(e);
	}
	const handlerClearClick = () => {
		setInputValue('');
		clearableFn && clearableFn();
	}
	return (
		<span className="mzl_input_inner" style={style || inputStyle}>
			{
				prefix && prefix !== '' && (typeof prefix) === 'string' ? <i className={[prefix, 'mzl_input_prefix'].join(' ')} /> : prefix && prefix !== '' && (typeof prefix) === 'object' ? <span className="mzl_input_prefix" >{prefix}</span> : null
			}
			<input
				type={type}
				placeholder={placeholder}
				className={inputClass}
				onChange={inputChange}
				onKeyDown={inputChange}
				value={inputValue}
				onFocus={(e) => focus && focus(e)}
				onBlur={() => blur && blur()}
			/>
			{
				suffix && suffix !== '' && (typeof suffix) === 'string' && !clearable ? <i className={[suffix, 'mzl_input_suffix'].join(' ')} /> : suffix && suffix !== '' && (typeof suffix) === 'object' ? <span className="mzl_input_suffix" >{suffix}</span> : null
			}
			{
				clearable && inputValue !== '' ? (
					<i className="m-icon-error mzl_input_suffix mzl_input_clearable" onClick={handlerClearClick} />
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
	defaultValue: '',
	value: '',
	type: 'text',
};
export default React.memo(Input);