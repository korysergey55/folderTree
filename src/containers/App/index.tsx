import React from 'react'
import { Router, Switch, Route } from 'react-router'
import { Provider } from 'mobx-react'
import store from 'stores'
import history from 'utils/history'
import PrivateRoute from 'components/PrivateRoute'
import TreeList from 'containers/Public/TreeList'
import HomePage from 'containers/Public/HomePage'

const App = () => {
  return (
    <Provider {...store}>
      <Router history={history}>
        <Switch>
          <PrivateRoute exact path="/private" component={HomePage} />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/folderTree" component={TreeList} />
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
