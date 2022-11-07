import React, { useEffect } from 'react'
import { RouteComponentProps, useRouteMatch, useParams } from 'react-router'

const DishDetail: React.FC<RouteComponentProps> = (props) => {
  const { location } = props
  const query = new URLSearchParams(location.search)

  useEffect(() => {
    console.log("食品详情id", query.get('id'));
    
  })

  console.log(useRouteMatch());
  console.log(useRouteMatch('/a'));
  console.log(useParams());
  

  return (
    <div>DishDetail id: {query.get('id')}</div>
  )
}

export default DishDetail