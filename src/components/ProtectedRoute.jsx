import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={(props) => {
      return (
        (!localStorage.getItem('quiz_username') ||
          localStorage.getItem('quiz_username')?.length === 0 ||
          localStorage.getItem('quiz_username') === "null" ||
          localStorage.getItem('quiz_username') === "undefined"
        ) ? <Redirect to='/' />
          : <Component {...props} {...rest} />
      )
    }} />
  )
}

export default ProtectedRoute