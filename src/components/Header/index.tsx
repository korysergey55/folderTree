import React from 'react'
import styles from './styles.module.scss'

interface IHeaderProps {
  title: string
}

const Header: React.FC<IHeaderProps> = ({ title = 'Tree' }) => {
  return (
    <header className={styles.sectionHeader}>
      <div className={styles.container}>
        <h3 className={styles.title}>{title}</h3>
      </div>
    </header>
  )
}

export default Header
