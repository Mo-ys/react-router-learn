import React from 'react'

interface Props {
  children?: React.ReactElement;
}

const MemoChildrenWithRouteMatch = React.memo(
  (props: Props) => props.children || null,
  (preProps, nextProps) => {
    return !(nextProps as any)?.match
  }
)

export const MemoChildrenWithRouteMatchExact = React.memo(
  (props: Props) => props.children || null,
  (preProps, nextProps) => {
    return !(nextProps as any)?.match?.isExact
  }
)

export default MemoChildrenWithRouteMatch