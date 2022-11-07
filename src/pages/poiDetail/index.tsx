import React from 'react'
import { RouteComponentProps } from 'react-router'

const PoiDetail: React.FC<RouteComponentProps> = (props) => {

  const { location, history } = props
  const query = new URLSearchParams(location.search)

  console.log('location', location)
  console.log('query', query.get('id'))


  return (
    <>
      <div>PoiDetail id: {query.get('id')}</div>
      <div>
        <ul>
          <li onClick={() => history.push('/dish-detail?id=1')}>商品1</li>
          <li onClick={() => history.push('/dish-detail?id=2')}>商品2</li>
          <li onClick={() => history.push('/dish-detail?id=3')}>商品3</li>
        </ul>
      </div>
    </>
  )
}

export default PoiDetail