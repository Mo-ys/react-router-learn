import React from 'react'
import { __RouterContext } from 'react-router'
import queryString from 'query-string'

const useQeury = () => {
  const { location } = React.useContext(__RouterContext)
  const search = location?.search

  const query = React.useMemo(() => {
    return queryString.parse(search)
  }, [search])

  return query
}

export default useQeury