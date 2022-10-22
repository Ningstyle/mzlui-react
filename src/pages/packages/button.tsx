import Title from '../../components/title';
import SubTitle from '../../components/subtitle';
import Demo1 from '../../demo/button/demo1';
import CodeView from '../../components/codeView';

export default function ButtonPage() {
  return (
    <div>
      <Title
        title="Button"
        notes="按钮"
        desc="网页常用 button 按钮，常用于响应一个事件或处理某个逻辑"
      />
      <SubTitle
        subtitle="基本使用"
        subnotes=""
        subdesc="button 按钮的基本使用"
      />
      <Demo1 />
      <CodeView path="button/demo2" />
    </div>
  );
}
