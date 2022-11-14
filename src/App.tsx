import React, { useEffect, Suspense } from 'react'
// import { Router, Route } from './react-router/modules'
import { Router, Route } from 'react-router'
import { createBrowserHistory } from 'history'
import PoiList from './pages/poiList'
import NumTest from './pages/numTest'
import Demo1 from './pages/demo1'
import Demo2 from './pages/demo2'
import IndexRedirectRoute from './components/indexRedirectRoute'
import Wraper from './pages/demo2/wraper'
import List from './pages/demo2/list'
import Detail from './pages/demo2/detail'
import CacheRoute from './components/cacheRoute'
import { Switch, Link, Redirect, Prompt, useLocation } from 'react-router-dom'
import Demo3_A from './pages/demo3/demo3_A'
import Demo3_B from './pages/demo3/demo3_B'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './App.css'

const history = createBrowserHistory({
  getUserConfirmation: (message, callBack) => {
    callBack(true) // 允许跳转
    callBack(false) // 禁止跳转
  }
})

function getCompAsync(loader: any) {
  return (props: any) => {
    const [comp, setComp] = React.useState(null)
    React.useEffect(() => {
      loader.then((asyncComp: any) => {
        setComp(asyncComp)
      })
    }, [])

    return comp && React.createElement(comp, props)
  }
}

function LazyComp(LazyCompSource: any) {
  return (props: any) => {
    return <Suspense fallback={<div>loading</div>}>
      <LazyCompSource {...props}></LazyCompSource>
    </Suspense>
  }
}

function App() {

  useEffect(() => {
    console.log("app render===");

  })


  return (
    <div className="App">
      <Router history={history}>
        <Link to="/a">a</Link><br></br>
        <Link to="/b">b</Link>
        {/* 
          Switch 对于同一个组件渲染不会进入销毁和重新挂载而是走更新渲染，没有使用Switch组件的则是会销毁没有匹配到的那组件
          源码内部使用React.Children.forEach()处理，不使用React.Children.toArray()，这样就不会给组件添加key
          可以手动给Route加key处理
          Swith 组件应该 直接包含Route组件，否则自己处理属性传值问题（看源码）
        */}
        <TransitionRoute></TransitionRoute>


        {/* <Switch>
          <Redirect from="/" exact strict to="/a"></Redirect>
          <Route path="/a" component={Demo3_A} />
        </Switch> */}

        {/* <Route path="/dish-detail" component={getCompAsync(() => import('./pages/dishDetail'))} /> */}
        {/* <Route path="/poi-detail" component={PoiDetail} /> */}
        {/* <Route path="/poi-detail" component={LazyComp(React.lazy(() => import('./pages/poiDetail')))} />
        <Route path="/poi-list" component={PoiList} />
        <Route path="/(\d+)([a-z])" component={NumTest} /> */}
        {/* /111a  ==> match.params={0: 111, 1: a} */}
        {/* 
          使用render方式渲染，可以自定义传入组件的props
        */}
        {/* 
          route传给组件的三个属性
          match: params（参数化路径配置匹配的键值对），path（匹配到到route的path，例如：/demo2/:id），
          url（真实匹配的路径，eg:/demo2/1），isExact（是否精确匹配path），match在没有匹配到path时为null

          history history有外部history库维护，如果需要在组件中判断location等值的不同，不应该使用history.location,应使用props.location代替
          location：pathname、search、hash、state
        */}
        {/* <Route path="/demo2/:id" render={(props) => {
          
          const { match, history, location } = props
          console.log("match", match);
          console.log("history", history);
          console.log("location", location);

          return <Demo1 match={match}/>
        }} /> */}
        {/* 
            使用children渲染将会在route渲染时渲染children返回的组件
            不管有没有有没有指定path
            需要自行处理渲染逻辑
          */}
        {/* <Route path="/demo1">
          {({ match, history, location }) => {
            console.log("match", match);
            console.log("history", history);
            console.log("location", location);
            if (!match) {
              return null
            }
            return <Demo1></Demo1>
          }}
        </Route> */}
        {/* 
          在children渲染下的嵌套路由的pathless route渲染
          条件路径没有匹配到父级路由，子级是一个没有指定path的子路由
          一般没有指定path会默认渲染
          但是嵌套路由的子级路由的match会继承父级路由的match，此时父级的match===null，就会使子级不会渲染
        */}
        {/* <Route path="/pathless">
          {() => {
            return (
              <Route render={(props) => {
                console.log('pathless route', props);

                return <NumTest {...props} />
              }}></Route>
            )
          }}
        </Route> */}
        {/* 
          exact: path完全匹配，path="/a" ,pathname="/a/"可匹配
          strict: 严格按照path最后的分隔符匹配，path="/a" ,pathname="/a/"|"/a"可匹配,path="/a/"，只匹配pathname="/a/"
          sensitive: 区分大小写
          exact&strict：必须完全一样，path="/a" pathname="/a/"不匹配
        */}
        {/* <Route path="/a" strict exact component={Demo1}></Route>
        <Route path="/demo2" component={Demo2}></Route>
        <IndexRedirectRoute
          indexRedirect="/list"
          path="/demo2-redirect"
          component={Wraper}
        >
          <Route path={`/demo2-redirect/list`} component={List}></Route>
          <CacheRoute path={`/demo2-redirect/detail/:id`} component={Detail}></CacheRoute>
        </IndexRedirectRoute> */}
      </Router>
    </div>
  );
}


function TransitionRoute() {
  const location = useLocation()
  return (
    // <TransitionGroup>
    //   <CSSTransition
    //     key={location.key}
    //     timeout={500}
    //     classNames="fade"
    //   >
    //     <Switch location={location}>
    //       <Route path="/a" component={Demo3_A}></Route>
    //       <Route path="/b" component={Demo3_A}></Route>
    //     </Switch>
    //   </CSSTransition>
    // </TransitionGroup>

    // < location={location}>
    <>
      <Route path="/a" component={Demo3_A}>
        {({match}) => {
          return (
            <CSSTransition
              in={!!match}
              timeout={500}
              classNames="fade"
              unmountOnExit
            >
              <Demo3_A></Demo3_A>
            </CSSTransition>
          )
        }}
      </Route>
      <Route path="/b">
      {({match}) => {
          return (
            <CSSTransition
              in={!!match}
              timeout={500}
              classNames="fade"
              unmountOnExit
            >
              <Demo3_B></Demo3_B>
            </CSSTransition>
          )
        }}
      </Route>
    </>
  )
}

export default App;
