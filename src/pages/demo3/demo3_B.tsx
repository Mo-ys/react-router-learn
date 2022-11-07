import React from 'react'

export default class Demo3_A extends React.Component {

  componentDidMount(): void {
    console.log('demo3 B did mount')
  }

  componentWillUnmount(): void {
    console.log('demo3 B will unmount')
  }

  render () {

    return (
      <div>
        <div>demo3 B</div>
      </div>
    )
  }
}