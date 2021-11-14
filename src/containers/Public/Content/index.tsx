import React from 'react'
import styles from './styles.module.scss'

interface IProps {
  title?: string
}
const Content: React.FC<IProps> = ({ title = 'content' }) => {
  return (
    <div className={styles.contentContainer}>
      <h2 className={styles.title}>{title}</h2>
    </div>
  )
}

export default Content
