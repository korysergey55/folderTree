import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import styles from './styles.module.scss'
const { v4: uuidv4 } = require('uuid')

const Tree: React.FC<any> = ({ data = [] }) => {
  return (
    <div className={styles.container}>
      <ul className={styles.ul}>
        {data.map((item: any) => (
          <TreeNode node={item} key={uuidv4()} />
        ))}
      </ul>
    </div>
  )
}

const TreeNode: React.FC<any> = ({ node }) => {
  const [childVisible, setChildVisiblity] = useState(false)
  const hasChild = node.children ? true : false

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
        {hasChild && (
          <FontAwesomeIcon icon={childVisible ? faCaretDown : faCaretRight} />
        )}
        <p className={styles.title}>{node.label}</p>
      </div>

      {hasChild && childVisible && (
        <ul className={styles.recursionTreeContainer}>
          <Tree data={node.children} />
        </ul>
      )}
    </li>
  )
}

export default Tree
