import React from 'react'
import { Prompt } from 'react-router-dom'

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

  render() {

    return (
      <div>
        <div>demo3 A</div>
        {/* <Prompt when={true} message="离开"></Prompt> */}
        <Prompt when={true} message={(location) => {
          console.log(location);
          if (location.pathname === '/a') {
            return true
          } else {
            return '要跳到b'
          }
        }}></Prompt>
      </div>
    )
  }
}