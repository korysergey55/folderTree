import React, { useEffect, useState } from 'react'
import Header from 'components/Header'
import Tree from '../Tree'
import styles from './styles.module.scss'
import treeData from 'utils/folderData'

const TreeList = () => {
  const [openedFolder, setOpenedFolder] = useState<string[]>([])

  const onChange = (node: any) => {
    const dublicate = openedFolder.find(el => el === node.key)
    if (dublicate) {
      const togleFolder = openedFolder.filter(el => el !== node.key)
      setOpenedFolder([...togleFolder])
    } else {
      setOpenedFolder(prev => [...prev, node.key])
    }
  }

  return (
    <div className={styles.section}>
      <Header title="Tree Visualization component" />
      <Tree data={treeData} openedItems={openedFolder} onChange={onChange} />
    </div>
  )
}

export default TreeList
