import Group from './Group';
import { useState } from 'react'
import styles from './Groups.module.css'
const GroupsForm = ({ finish, list }) => {
  const [groups, setGroups] = useState(list)
  const addGroup = () => {
    let groupObj = {
      title: "New Title",
      options: ["new option"]
    }
    if (groups.length >= 3) {
      alert("Cannot push anymore!")
      return
    }
    setGroups((cur) => [...cur, groupObj])
  }
  const deleteMe = (obj) => {
    // 이거 왜 DOM 반영이 안돼...?
    const arr = [...groups]
    var index = arr.indexOf(obj)
    if (index > -1) { // 없을 때
      arr.splice(index, 1)
    }
    console.log(arr, index)
    setGroups(arr)
  }
  const handleCallback = (oldVal, val) => {
    const arr = [...groups]
    var index = arr.indexOf(oldVal)
    arr[index] = val // 새값으로 바꾸고
    setGroups(arr) // 교체
  }

  const makeList = () => {
    // groups format
    for (let x in groups) {
      // 타이틀 입력 검사
      if (!(groups[x].title.length > 0)) {
        finish([])
        return alert("You have to text every title!")
      }
      // 옵션 값이 입력 되어있을 때만 포함시킨다.
      groups[x].options = groups[x].options.filter(op => {
        return (op && op.length > 0)
      })
    }
    finish(groups)
  }
  return (
    <>
      {groups.map((el, i) => {
        return (
          <Group key={i}
            deleteMe={ deleteMe }
            parentCallback={ handleCallback }
            obj={el} 
          />  
        )
      })}
      <button type="button" className={styles.AddButton} onClick={addGroup}>그룹 추가</button>
      <div>
        <button type="button" className={styles.buttonNext} onClick={makeList}>리스트 생성</button>
      </div>
    </>
  )
}
export default GroupsForm