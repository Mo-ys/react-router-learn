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
import Comp404 from './pages/404'
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
        <Link to="/b">b</Link><br />
        <Link to="/c">c</Link><br />

      </Router>
    </div>
  );
}

export default App;
