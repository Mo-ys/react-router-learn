import React from 'react'
import { RouteProps, Route, Redirect } from 'react-router'

interface IndexRedirectRouteProps extends RouteProps {
  indexRedirect?: string;
}

const IndexRedirectRoute: React.FC<any> = (props: IndexRedirectRouteProps) => {

  const { children, component: Component, indexRedirect, ...reProps } = props || {}

  return (
    <Route
      exact={false}
      {...reProps}
      render={(routePorps) => {
        console.log("===>", indexRedirect);
        
        return (
          <>
            {
              indexRedirect && routePorps?.match?.isExact && (
                <Redirect to={`${routePorps?.match.url}${indexRedirect}`} />
              )
            }
            {
              Component && <Component {...routePorps}>{children}</Component>
            }
          </>
        )
      }}
    />
  )
}

export default IndexRedirectRoute