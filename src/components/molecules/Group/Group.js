import styles from './Group.module.css'
import {useState} from 'react'
const Group = ({obj, deleteMe, parentCallback}) => {
  const [options, setOptions] = useState(obj.options)
  const [title, setTitle] = useState(obj.title)
  const addOption = () => {
    if (options.length >= 10) {
      alert("Cannot push anymore!")
      return
    }
    setOptions((cur) => [...cur, ""])
  }
  const onTitleChange = (e) => {
    const {target: {value}} = e
    setTitle(value)
    parentCallback(obj, {
      title: value,
      options: options
    })
  }

  // 옵션 값 타이핑. 한번 이렇게도 해보고 싶었어
  const onOptionChange = (value, i) => {
    let newArr = [...options]
    newArr[i] = value
    setOptions(newArr)
    parentCallback(obj, {
      title: title,
      options: newArr
    })
  }
  return (
    <div className={ styles.Group }>
      {/* <button className={ styles.Delete} onClick={()=>deleteMe(obj)}>&times;</button> */}
      <div>
        <label className={ styles.Label }>Title: </label>
        <input type="text" className={styles.InputTitle} placeholder="타이틀"
          value={ title } onChange={onTitleChange}></input>
      </div>
      <div className={ styles.Options }>
        <button type="button" onClick={addOption}>옵션 추가</button>
        {options.map((op, i) => {
          return (
            <input key={i} type="text" className={styles.InputOption} placeholder="option"
              onChange={(e) => onOptionChange(e.target.value, i)}
              onKeyPress={({ key }) => key === 'Enter' && addOption()}
              value={ op }
            />
          )
        }) }
      </div>
    </div>
  )
}
export default Group