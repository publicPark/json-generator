
import styles from './CountListForm.module.css'
const CountListForm = ({ list, titleList }) => {
  return (
    <>
      <ul className={styles.list}>
        <li className={ styles.element }>
          <input className={styles.inputCount} type="number" placeholder="남은 개수" disabled />
          <div className={ styles.grey }>
            { titleList && titleList.join(' / ') }
          </div>
        </li>
        {list.map((el, i) => {
          return (
            <li key={i} className={ styles.element }>
              <input className={styles.inputCount} type="number" placeholder="남은 개수"
                value={el.remainCount}
              />
              <div>{el.nameList.join(' / ')}</div>
            </li>
          )
        })}
      </ul>
      <button className={ `${styles.buttonNext} App-logo` }>완료</button>
    </>
  )
}
export default CountListForm