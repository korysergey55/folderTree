import * as React from 'react'
import Header from 'components/Header'
import Tree from '../Tree'
import styles from './styles.module.scss'
import treeData from 'utils/folderData'

const TreeList = () => {
  return (
    <div className={styles.section}>
      <Header title="Tree Visualization component" />
      <Tree data={treeData} />
    </div>
  )
}

export default TreeList
