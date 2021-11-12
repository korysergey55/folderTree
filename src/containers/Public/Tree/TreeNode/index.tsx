import React from 'react'
import { IFolderData } from '../types'
import { ICommon } from '../types'
import Tree from '..'
import styles from './styles.module.scss'
import cn from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'

interface IPropsTreeNode extends ICommon {
  node: IFolderData
}
const TreeNode: React.FC<IPropsTreeNode> = ({ node, ...common }) => {
  const { openedItems, content, onChange, onChangeContent } = common
  const hasChild = node.children && node.children.length ? true : false

  const isVisible = () => {
    const activeItem = openedItems.find((item: string) => item === node.key)
    return activeItem
  }
  const visible = isVisible()

  return (
    <li className={styles.nodeItem}>
      <div  className={cn({
          [styles.nodeContainer]: true,
          [styles.active]: visible,
        })}
        onClick={() => {
          if (node.children) {
            onChange(node.key)
          } else {
            onChangeContent(node)
          }
        }}
      >
        <div className={styles.node}>
          <p className={cn(styles.title, {
              [styles.activeTitle]: content?.key === node.key,
            })}
          >
            {hasChild && (
              <FontAwesomeIcon icon={faCaretRight} className={styles.icon} />
            )}
            {node.label}
          </p>
        </div>
      </div>
      {hasChild && (
        <div className={cn(styles.innerContainer, {
            [styles.visible]: visible,
          })}
        >
          <Tree data={node.children || []} {...common} />
        </div>
      )}
    </li>
  )
}
export default TreeNode
