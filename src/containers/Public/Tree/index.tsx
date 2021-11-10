import React, { useState } from 'react'
import IFolderData from 'models/index'
import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import cn from 'classnames'

interface IPropsTree {
  data: IFolderData[]
  openedItems?: string[] | []
  onChange?: (id: string) => void
}

const Tree: React.FC<IPropsTree> = ({ data = [], openedItems, onChange }) => {
  return (
    <div className={styles.container}>
      <ul className={styles.ul}>
        {data.map((item: any) => (
          <TreeNode
            node={item}
            key={item.key}
            openedItems={openedItems}
            onChange={onChange}
          />
        ))}
      </ul>
    </div>
  )
}
// interface IPropsTreeNode {
//   node: IFolderData
// }
const TreeNode: React.FC<any> = ({ node, openedItems, onChange }) => {
  const hasChild = node.children && node.children.length !== 0 ? true : false

  const isVisible = () => {
    const activeItem = openedItems.find((item: any) => item === node.key)
    return activeItem
  }
  const visible = isVisible()

  return (
    <li className={styles.li}>
      <div
        className={visible ? styles.active : styles.nodeContainer}
        onClick={() => {
          if (hasChild) {
            onChange(node)
          }
        }}
      >
        <p
          className={cn(styles.title, {
            [styles.hasChild]: hasChild,
          })}
        >
          {hasChild && (
            <FontAwesomeIcon icon={faCaretRight} className={styles.icon} />
          )}
          {node.label}
        </p>
      </div>
      {hasChild && visible && (
        <Tree
          data={node.children}
          openedItems={openedItems}
          onChange={onChange}
        />
      )}
    </li>
  )
}

export default Tree
