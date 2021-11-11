import {
  makeAutoObservable,
  observable,
  action,
  reaction,
  toJS,
  // configure,
  // computed,
  // runInAction,
} from 'mobx'

class ItemsStore {
  @observable titleId: string = ''

  constructor() {
    makeAutoObservable(this)
    reaction(
      () => this.titleId,
      _ => console.log('mobx', toJS(this.titleId))
    )
  }
  @action setTitleId(data: string) {
    this.titleId = data
  }
}

export default new ItemsStore()
