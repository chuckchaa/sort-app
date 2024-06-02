import styles from './ResetButton.module.scss'

import { Button } from '../UI'

const ResetButton = () => {
  return (
    <Button
      text="Перестворити масив"
      disabled={false}
      className={styles.root}
    />
  )
}

export default ResetButton
