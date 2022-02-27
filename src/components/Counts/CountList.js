
import { useEffect, useState } from 'react'
import CountInput from './CountInput'
import styles from './CountList.module.css'
const CountListForm = ({ list, titleList, formatResult }) => {
  const [countList, setCountList] = useState(list)
  useEffect(() => {
    setCountList(list)
  },[list])
  const onChange = (count, index) => {
    let newArr = [...countList]
    newArr[index].remainCount = count
    setCountList(newArr)
  }
  const finish = () => {
    formatResult(countList)
  }
  return (
    <>
      {/* 상단 th */}
      <ul className={styles.list}>
        <li className={ styles.element }>
          <input className={styles.inputCount} type="number" placeholder="남은 개수" disabled />
          <div className={ styles.Title }>
            { titleList && titleList.join(' / ') }
          </div>
        </li>
        {countList.map((el, i) => {
          // 이거 컴포넌트화하기
          return <CountInput key={i} data={el} index={ i } onChange={ onChange }/>
        })}
      </ul>
      <button className={`${styles.buttonNext} App-logo`}
        onClick={ finish }
      >
        완료
      </button>
    </>
  )
}
export default CountListForm