import React from 'react'
import { RouteComponentProps } from 'react-router'

const NumTest: React.FC<RouteComponentProps> = (props) => {

  const { match } = props

  console.log(match);
  

  return (
    <div>num test</div>
  )
}

export default NumTest