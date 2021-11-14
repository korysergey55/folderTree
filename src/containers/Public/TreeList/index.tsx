import React, { useState } from 'react'
import IFolderData from 'models/index'
import treeData from 'utils/folderData'
import Header from 'components/Header'
import Tree from '../Tree'
import Content from '../Content'
import styles from './styles.module.scss'

const TreeList = () => {
  const [content, setContent] = useState<IFolderData | null>(() => {
    const items: any = localStorage.getItem('activeTitle')
    if (items) {
      const parsedItems: any = JSON.parse(items)
      return parsedItems
    }
    return null
  })
  const [openedFolder, setOpenedFolder] = useState<string[]>(() => {
    const items: any = localStorage.getItem('openedFolders')
    if (items) {
      const parsedItems: any = JSON.parse(items)
      return parsedItems
    }
    return []
  })

  const onChangeContent = (node: IFolderData) => {
    setContent(node)
    localStorage.setItem('activeTitle', JSON.stringify(node))
  }

  const onChange = (key: string) => {
    let arr = [...openedFolder]
    const index = arr.indexOf(key)
    if (index !== -1) {
      arr.splice(index, 1)
    } else {
      arr = [...arr, key]
    }
    setOpenedFolder(arr)
    // setContent(null)
    localStorage.setItem('openedFolders', JSON.stringify(arr))
  }

  return (
    <div>
      <Header title="Tree Visualization component" />
      <div className={styles.containerTreeList}>
        <div className={styles.wripper}>
          <Tree
            data={treeData}
            openedItems={openedFolder}
            content={content}
            onChange={onChange}
            onChangeContent={onChangeContent}
          />
        </div>
        {content && <Content title={content.label} />}
      </div>
    </div>
  )
}

export default TreeList
