import React from 'react'

export default class Demo3_A extends React.Component {

  componentDidMount(): void {
    console.log('demo3 A did mount')
  }

  componentWillUnmount(): void {
    console.log('demo3 A will unmount')
  }

  componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
    console.log('demo3 A update')
    
  }

  render () {

    return (
      <div>
        <div>demo3 A</div>
      </div>
    )
  }
}