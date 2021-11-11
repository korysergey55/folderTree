import React from 'react'
import { IFolderData } from './types'
import { ICommon } from './types'
import styles from './styles.module.scss'
import TreeNode from 'containers/Public/Tree/TreeNode/index'

interface IPropsTree extends ICommon {
  data: IFolderData[]
}

const Tree: React.FC<IPropsTree> = ({ data = [], ...common }) => {
  return (
    <div className={styles.container}>
      <ul className={styles.treeList}>
        {data.map(item => (
          <TreeNode node={item} key={item.key} {...common} />
        ))}
      </ul>
    </div>
  )
}
export default Tree
