import React from 'react';
/*
  subtitle:组件示例title 
  subnotes:组件示例备注名
  subdesc:组件示例描述
*/
export type TitleProps = {
  subtitle: string;
  subnotes?: string;
  subdesc?: JSX.Element | string;
};
export default function SubTitle(props: TitleProps): JSX.Element {
  const { subtitle, subnotes, subdesc } = props;
  return (
    <div>
      <h2 className="packagesSubTitle">
        {subtitle}
        <span>{subnotes}</span>{' '}
      </h2>
      <p className="packagesSubDesc">{subdesc}</p>
    </div>
  );
}
SubTitle.defaultProps = {
  subnotes: '',
  subdesc: '',
};
