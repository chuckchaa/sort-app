import { Button } from '../UI'
import styles from './SortButtons.module.scss'
const SortButtons = () => {
  return (
    <div className={styles.root}>
      <Button text="Швидке сортування" />
      <Button text="Сортування злиттям" />
      <Button text="Сортування змішуванням" />
    </div>
  )
}

export default SortButtons
