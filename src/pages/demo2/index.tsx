import React from 'react'
import { RouteComponentProps, Route } from 'react-router'
import List from './list'
import Detail from './detail'

const Demo2: React.FC<any> = (props: RouteComponentProps) => {

  const { match } = props

  return (
    <div className="demo2-wrap">
      Demo2
      <List></List>
      {/* <Route path={`${match.path}/list`} component={List}></Route> */}
      <Route path={`${match.path}/detail/:id`} component={Detail}></Route>
    </div>
  )
}

export default Demo2