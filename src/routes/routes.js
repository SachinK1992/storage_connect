import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { routerList } from './routeList'
import RouteValidator from './RouteValidator'

const CustomRoutes = () => (
  <>
    <Routes>
      {routerList.map(({ path, key, ...props }) => (
        <Route
          path={path}
          key={key}
          exact={true}
          element={<RouteValidator path={path} {...props} />}
        />
      ))}
    </Routes>
  </>
)

export default CustomRoutes