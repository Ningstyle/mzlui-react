import React from 'react';
/*
  title:组件名 
  notes:组件备注名
  desc:组件全局描述
*/
export type TitleProps = {
  title: string;
  notes?: string;
  desc?: JSX.Element | string;
};
export default function Title(props: TitleProps): JSX.Element {
  const { title, notes, desc } = props;
  return (
    <div>
      <h1 className="packagesTitle">
        {title}
        <span>{notes}</span>{' '}
      </h1>
      <p className="packagesDesc">{desc}</p>
    </div>
  );
}
Title.defaultProps = {
  notes: '',
  desc: '',
};
