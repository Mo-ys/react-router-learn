import React from 'react'
import { RouteComponentProps } from 'react-router'
import useQuery from './../../hooks/useQuery'

const Detail: React.FC<any> = (props: RouteComponentProps) => {

  // 获取search
  const { location } = props

  // 1 URLSearchParams
  const query = new URLSearchParams(location.search)
  console.log(query.get('a'));

  // 2 query-string
  console.log(useQuery());
  
  console.log("match", props.match);
  console.log("location", props.location);
  

  return (
    <div>
      detail: {(props.match?.params as any)?.id}
      <div>
        <input type="text" />
      </div>
    </div>
  )
}

export default Detail