import React, { useState } from 'react'
import { observer } from 'mobx-react'
import { useStore } from 'stores'
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
const TreeNode: React.FC<IPropsTreeNode> = observer(({ node, ...common }) => {
  const [activeTitle, setActiveTitle] = useState<boolean>(false)
  const { ItemsStore } = useStore()
  const { openedItems, onChange, onChangeContent } = common
  const hasChild = node.children && node.children.length ? true : false

  const isVisible = () => {
    const activeItem = openedItems.find((item: string) => item === node.key)
    return activeItem
  }
  const visible = isVisible()

  const onChangeActiveTitle = (node: IFolderData) => {
    if (!hasChild) {
      ItemsStore.setTitleId(node.key)
      setActiveTitle(!activeTitle)
    }
  }

  return (
    <li className={styles.nodeItem}>
      <div
        className={visible ? styles.active : styles.nodeContainer}
        onClick={() => {
          if (node.children) {
            onChange(node.key)
          } else {
            onChangeContent(node)
          }
        }}
      >
        <div className={styles.node}>
          <p
            className={cn(styles.title, {
              [styles.activeTitle]: activeTitle,
            })}
            onClick={() => onChangeActiveTitle(node)}
          >
            {hasChild && (
              <FontAwesomeIcon icon={faCaretRight} className={styles.icon} />
            )}
            {node.label}
          </p>
        </div>
      </div>
      {hasChild && (
        <div
          className={cn(styles.innerContainer, {
            [styles.visible]: visible,
          })}
        >
          <Tree data={node.children || []} {...common} />
        </div>
      )}
    </li>
  )
})
export default TreeNode
