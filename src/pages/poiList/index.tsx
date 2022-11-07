import React, { useEffect } from 'react'
import { RouteComponentProps } from 'react-router'
import { Link } from 'react-router-dom'

const PoiList: React.FC<RouteComponentProps> = (props) => {

  useEffect(() => {

    return () => {
      console.log('poilist distory');
      
    }
  }, [])

  return (
    <div>
      <ul>
        <Link to="/poi-detail?id=1">
        <li>商家1</li>
        </Link>
        <Link to="/poi-detail?id=2">
        <li>商家1</li>
        </Link>
        {/* <Link to="/poi-detail?id=3"> */}
        <li>商家1</li>
        {/* </Link> */}
      </ul>
    </div>
  )
}

export default PoiList