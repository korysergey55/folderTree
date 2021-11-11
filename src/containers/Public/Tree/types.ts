export  interface IFolderData {
  key: string
  label: string
  children?: IFolderData[]
}

export interface ICommon {
  openedItems: string[]
  onChange: (id: string) => void
  content: string
  onChangeContent: (value: IFolderData) => void
}
