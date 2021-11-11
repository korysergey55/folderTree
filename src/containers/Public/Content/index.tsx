import React from 'react'
import styles from './styles.module.scss'

interface IProps {
  title?: string
}
const Content: React.FC<IProps> = ({ title = 'content' }) => {
  return (
    <div className={styles.contentContainer}>
      <p className={styles.title}>{title}</p>
    </div>
  )
}

export default Content
