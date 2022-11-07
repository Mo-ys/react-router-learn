import React from 'react'
import { Route, RouteProps, RouteComponentProps } from 'react-router'
import MemoChildrenWithRouteMatch, { MemoChildrenWithRouteMatchExact } from './memoChildrenMatch'
import Remout from './remount'

interface CacheRouteProps extends RouteProps {
  // 是否在精确匹配时优化缓存组件
  shouldMatchExact?: boolean;
  // 是否重新渲染组件
  shouldRemount?: boolean;
  // 强制隐藏
  forceHide?: boolean;
  // 不缓存dom
  shouldDestoryDomWhenNotMatch?: boolean;
}

const CacheRoute: React.FC<any> = (props: CacheRouteProps) => {

  const routeHanRenderRef = React.useRef(false)

  const {
    component,
    render,
    shouldMatchExact,
    shouldRemount,
    shouldDestoryDomWhenNotMatch,
    forceHide,
    ...reProps
  } = props || {}

  return (
    <Route
      {...reProps}
    >
      {(routeChildrenProps) => {

        // 有没有匹配到路径 1部分匹配 2精确匹配
        let match = !!routeChildrenProps?.match

        if (shouldMatchExact) {
          match = !!routeChildrenProps?.match?.isExact
        }

        if (shouldDestoryDomWhenNotMatch) {
          if (!match) {
            routeHanRenderRef.current = false
          }
          return match
            ? component
              ? React.createElement(component, routeChildrenProps)
              : render
                ? render(routeChildrenProps as RouteComponentProps)
                : (null as any)
            : null
        } else {

          if (match && !routeHanRenderRef.current) {
            routeHanRenderRef.current = true
          }
          let shouldRender = true
          if (!match && !routeHanRenderRef.current) {
            // 防止在初次加载的时候就去渲染组件
            shouldRender = false
          }
          const matchStyle = {
            display: match && !forceHide ? 'block' : 'none'
          }

          const MemoCache = shouldMatchExact ? MemoChildrenWithRouteMatchExact : MemoChildrenWithRouteMatch
          return shouldRender && (
            <div style={matchStyle}>
              {
                <Remout shouldRemount={shouldRemount}>
                  <MemoCache>
                    {
                      component
                        ? React.createElement(component, routeChildrenProps)
                        : render
                          ? render(routeChildrenProps as RouteComponentProps)
                          : (null as any)
                    }
                  </MemoCache>
                </Remout>
              }
            </div>
          )
        }
      }}
    </Route>
  )
}

export default CacheRoute