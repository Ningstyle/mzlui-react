import React from 'react';
import { Input, Button } from '../../../packages';

export default function Demo1() {
	const [value, setValue] = React.useState('33333');
	return (
		<div style={{ width: '264px' }}>
			<Button onClick={() => setValue('2222')}>点击</Button>
			<Input
				type="text"
				prefix="m-icon-search"
				placeholder="请输入你要搜索的内容"
				onChange={(e) => console.log(e.target.value)}
				clearable
			/>
		</div>
	)
}
