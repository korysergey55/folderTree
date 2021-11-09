import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import styles from './styles.module.scss'
import IFolderData from 'models/index'

interface IPropsTree {
  data: IFolderData[]
}
interface IPropsTreeNode {
  node: IFolderData
}
const Tree: React.FC<IPropsTree> = ({ data = [] }) => {
  return (
    <div className={styles.container}>
      <ul className={styles.ul}>
        {data.map((item: any) => (
          <TreeNode node={item} key={item.key} />
        ))}
      </ul>
    </div>
  )
}

const TreeNode: React.FC<any> = ({ node }) => {
  const [childVisible, setChildVisiblity] = useState(false)
  const hasChild = node.children && node.children.length !== 0 ? true : false

  const onChangeVisible = () => {
    if (hasChild) {
      setChildVisiblity(!childVisible)
    }
  }

  return (
    <li className={styles.itemNode}>
      <div
        className={childVisible ? styles.active : styles.nodeContainer}
        onClick={onChangeVisible}
      >
        <p className={styles.title}>
          {hasChild && (
            <FontAwesomeIcon
              icon={faCaretRight}
              className={styles.icon}
            />
          )}
          {node.label}
        </p>
      </div>
      {hasChild && childVisible && <Tree data={node.children} />}
    </li>
  )
}

export default Tree
