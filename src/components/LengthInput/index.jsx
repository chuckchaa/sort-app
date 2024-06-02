import styles from './LengthInput.module.scss'
import RangeInput from '../UI/RangeInput'

const LengthInput = () => {

  return (
    <RangeInput
      value={25}
      title={`Довжина масиву [${25}]`}
      min={15}
      max={30}
      disabled={false}
      wrapperClassName={styles.range}
    />
  )
}

export default LengthInput
