// 테스트 데이터를 생성하는 거
import { useEffect, useState } from 'react';
import './App.css';
import CountListForm from './components/organisms/CountListForm/CountListForm';
import GroupsForm from './components/organisms/GroupsForm/GroupsForm';
import { cartesian, formatData } from './functions/Generator.functions'

// 나중에 페이지가 여러개 생기면 페이지로 옮길거
function App() {
  const [result, setResult] = useState("생성")
  const [titleList, setTitleList] = useState([])
  const [allList, setAllList] = useState([])

  const nextToCount = (groups) => {
    // 옵션리스트의 리스트를 생성하는데, 옵션 값이 입력 되어있을 때만 포함시킨다.
    const optionsList = groups.map((g) => g.options.filter(op => {
      if (op && op.length > 0) return op
      else return null
    }))
    const formatted = formatData(cartesian(...optionsList))
    setAllList(formatted)

    // 타이틀 빼기
    const titleList = groups.map((g) => g.title)
    console.log("ttt", groups, titleList)
    setTitleList(titleList)
  }

  useEffect(() => {
    console.log(allList)
  }, [allList])

  return (
    <div className="App">
      <header className="App-header">
        <section className="section">
          <p>
            그룹 생성
          </p>
          <GroupsForm finish={ nextToCount }/>
        </section>
        
        <section>
          <p>
            개수 입력
          </p>
          <CountListForm list={allList} titleList={titleList}/>
        </section>
      </header>
    </div>
  );
}

export default App;
