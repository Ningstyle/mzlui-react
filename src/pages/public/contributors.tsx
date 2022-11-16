import React, { useEffect } from "react";
import { Octokit } from "https://cdn.skypack.dev/@octokit/core";
import Title from '../../components/title';
import SubTitle from '../../components/subtitle';
import Wechart from '../../assets/WeChat.jpg';
import Zhifubao from '../../assets/Zhifubao.jpg';


function Contributors(): JSX.Element {
  const octokit = new Octokit({
    auth: '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',
  })
  const [list, setList] = React.useState([]);
  const [page, setPage] = React.useState(1);
  async function get() {
    const result = await octokit.request('GET /repos/Ningstyle/mzlui-react/contributors', {
      page,
      per_page: 100,
    })
    return result
  }
  useEffect(() => {
    get().then(res => {
      setList(res.data)
      console.log(list);
    })
  }, [])

  return <div>
    <Title title="贡献者列表" notes="" desc="所有重要参与licht-ui的贡献人员一览。" />
    <SubTitle subtitle={`所有贡献者（${list.length}）`} />
    <div className="contributors_inner">
      {
        list.length > 0 ? list.map((item: any, index: number) => (
          <li key={index} onClick={() => window.open(item.html_url)}>
            <img src={item.avatar_url} alt="" />
          </li>
        )) : null
      }

    </div>
    <SubTitle subtitle="捐赠" subdesc="如果您觉得在本项目中对您有一定的帮助，不妨捐赠作者一杯咖啡，这将会为作者在服务器资源等方便可以减少更多压力。以便我们更好的更新维护。" />
    <img src={Wechart} alt="" className="jzImg" />
    <img src={Zhifubao} alt="" className="jzImg" />
  </div>;
}
export default React.memo(Contributors);