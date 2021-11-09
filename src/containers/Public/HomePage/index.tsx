import Loader from 'components/Loader'
import * as React from 'react'
import styles from './styles.module.scss'

const HomePage = () => {
  return (
    <>
      <div className={styles.container}>
        <h2>HomePage</h2>
        <Loader />
      </div>
    </>
  )
}

export default HomePage
