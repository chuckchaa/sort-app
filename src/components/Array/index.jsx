import styles from './Array.module.scss'
import Bar from '../Bar'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import {
  selectActiveElements,
  selectAuxiliaryElements,
  selectSortedElements,
} from '../../redux/sortProcess/selectors'

const ACTIVE_COLOR = '#fa7a85'
const SORTED_COLOR = '#8aff96'
const AUXILIARY_COLOR = '#0454cc'
const DEFAULT_COLOR = '#02b0f0'

const Array = () => {
  const dispatch = useDispatch()
  const activeElements = useSelector(selectActiveElements())
  const auxiliaryElements = useSelector(selectAuxiliaryElements())
  const sortedElements = useSelector(selectSortedElements())
  const array = useSelector(({ arraySettings }) => arraySettings.array)
  const barWidth = 100 / array.length

  useEffect(() => {
    dispatch({ type: 'CONTROLS/RESET_ARRAY' })
  }, [])

  return (
    <div className={styles.root}>
      {array.map((height, index) => {
        const barColor =
          (sortedElements.includes(index) && SORTED_COLOR) ||
          (activeElements.includes(index) && ACTIVE_COLOR) ||
          (auxiliaryElements.includes(index) && AUXILIARY_COLOR) ||
          DEFAULT_COLOR
        return (
          <Bar key={index} width={barWidth} height={height} color={barColor} />
        )
      })}
    </div>
  )
}

export default Array
