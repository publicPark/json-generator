// 테스트 데이터를 생성하는 거
import { useEffect, useState } from 'react';
import './App.css';
import CountList from './components/Counts/CountList';
import Groups from './components/Groups/Groups';
import { cartesian, formatData } from './functions/Generator.functions'

// 나중에 페이지가 여러개 생기면 페이지로 옮길거
function App() {
  const [result, setResult] = useState("생성")
  const [titleList, setTitleList] = useState([])
  const [allList, setAllList] = useState([])
  const [groupList, setGroupList] = useState([])

  const nextToCount = (groups) => {
    setGroupList([...groups])
    // 옵션리스트의 리스트를 생성하는데, 옵션 값이 입력 되어있을 때만 포함시킨다.
    const optionsList = groups.map((g) => g.options.filter(op => {
      if (op && op.length > 0) return op
      else return null
    }))
    const formatted = formatData(cartesian(...optionsList))
    setAllList(formatted)

    // 타이틀 빼기
    const titleList = groups.map((g) => g.title)
    setTitleList(titleList)
    // console.log("nextToCount", groups, titleList)
  }

  useEffect(() => {
    // console.log("allList", allList)
  }, [allList])

  const preList = [{
    title: "색상",
    options: ["빨강", "노랑"]
  }, {
    title: "사이즈",
    options: ["스몰", "라지", "뭐지"]
    }]
  
  const formatResult = (countList) => {
    let obj = {
      countList,
      titleList,
      groupList // 이건 추가 정보 (중복)
    }
    console.log("Result (groupList는 추가 정보)", obj)
    setResult(obj)
  }

  return (
    <div className="App">
      <header className="App-header">
        <section className="section">
          <p>
            그룹 리스트 폼
          </p>
          <Groups finish={nextToCount} list={preList}/>
        </section>
        
        {
          allList.length > 0 && 
          <section className="borderTop">
            <p>
              개수 입력
            </p>
              <CountList list={allList} titleList={titleList} formatResult={ formatResult }/>
          </section>
        }
      </header>
    </div>
  );
}

export default App;
