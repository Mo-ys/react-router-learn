import React from 'react'
import { RouteComponentProps, Route } from 'react-router'
import List from './list'
import Detail from './detail'

const Demo2Wraper: React.FC<any> = (props: RouteComponentProps) => {

  const { match } = props

  return (
    <div className="demo2-wrap">
      Demo2
      {(props as any).children}
    </div>
  )
}

export default Demo2Wraper