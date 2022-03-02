// 테스트 데이터를 생성하는 거
import { useEffect, useState } from 'react';
import './App.css';
import CountList from './components/Counts/CountList';
import Groups from './components/Groups/Groups';
import { cartesian, formatData } from './functions/Generator.functions'

// 나중에 페이지가 여러개 생기면 페이지로 옮길거
function App() {
  const [result, setResult] = useState(null)
  const [titleList, setTitleList] = useState([])
  const [allList, setAllList] = useState([])
  const [groupList, setGroupList] = useState([])

  const nextToCount = (groups) => {
    // 옵션리스트의 리스트를 생성
    const optionsList = groups.map((g) => g.options)
    const formatted = formatData(cartesian(...optionsList))
    setAllList(formatted)
    setGroupList([...groups])

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
    alert("콘솔을 확인하세요")
    console.log("Result", obj)
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

        { result && <form id="postForm" action="https://apigen-server.herokuapp.com/api/save" method="POST">
          <textarea name="value" value={ JSON.stringify(result) } readOnly></textarea>
          <button type="submit">post result</button>
        </form> }
      </header>
    </div>
  );
}

export default App;
