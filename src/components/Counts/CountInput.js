

import { useEffect, useState } from 'react'
import styles from './CountList.module.css'
const CountInput = ({ data, index, onChange }) => {
  const [count, setCount] = useState(data.remainCount)
  useEffect(() => {
    setCount(data.remainCount)
  }, [data])
  const onCountChange = (e) => {
    const {target: {value}} = e
    value.replace(/[0-9]/g, '') // 숫자 아닌것은 안받아요~
    let num = parseInt(value) // 정수로 변환해요
    if (isNaN(num)) {
      num = 0
    }
    const max = 100
    if (num > max) {
      alert("최대 100개만")
      setCount(max)
      onChange(max, index)
      return
    }
    setCount(num)
    onChange(num, index)
  }
  return (
    <li className={ styles.element }>
      <input className={styles.inputCount} type="text" placeholder="남은 개수"
        value={count} onChange={ onCountChange }
      />
      {/* {data.combination && <div className={styles.textName}>{data.combination.join(' / ')}</div>} */}
      {data.combination && data.combination.map((el, i) => { 
        return (
          <>
            <div className={styles['op' + (i + 1)]}>{el}
              { i+1<data.combination.length && <span className={styles.slash}>/</span> }
            </div>
          </>
        )
      })}
    </li>
  )
}
export default CountInput