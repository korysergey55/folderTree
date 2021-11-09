import React from 'react'
import { useStore } from 'stores'
import { Route, Redirect } from 'react-router-dom'

const accessToken = true
const PrivateRoute: React.FC<any> = ({ path, exact, component }) => {
  // const { authAPI } = useStore()
  return accessToken ? (
    <Redirect to={'/home'} />
  ) : (
    <Route path={path} exact={exact} component={component} />
  )
}

export default PrivateRoute
