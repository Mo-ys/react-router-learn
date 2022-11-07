import React from 'react'
import { RouteComponentProps } from 'react-router'
import {Link, NavLink} from 'react-router-dom'

const List:React.FC<any> = (props: RouteComponentProps) => {

  const ref = React.useRef(null)

  console.log('ref', ref);
  

  return (
    <div>
      <ul>
        <li>
          <Link 
            to="/demo2-redirect/detail/1"
            onClick={(e) => {
              console.log('click link', e)
              // 可以使用阻止默认事件来阻止link的跳转行为
              e.preventDefault()
            }}
          >detail 1</Link>
        </li>
        <li>
          <Link to="/demo2-redirect/detail/2" replace innerRef={ref} rel="noreferrer">detail 2</Link>
        </li>
        <li>
          {/* <Link to="/demo2-redirect/detail/3">detail 3</Link> */}
          <Link to={
            {
              pathname: '/demo2-redirect/detail/2',
              search: '?a=2',
              state: {c:2},
              hash: '#q',
              key: 'ddfff',
            }
          }>detail 3</Link>
        </li>
        <li>
          {/* <Link to="/demo2-redirect/detail/3">detail 3</Link> */}
          <Link to={
            (location) => {
              // v5.1以上支持
              console.log("link location", location);
              
              return ''
            }
          }>detail 3</Link>
        </li>
        <li>
          <NavLink 
            to="/demo2/detail/4" 
            // 激活路由时的样式
            activeStyle={{color: 'red'}}
            // 激活路由时的类名 默认active
            activeClassName="cur-active"
            // className string | fun
            className={(isActive) => {
              console.log('classname', isActive);
              
              return ''
            }}
            // style obj | fun 同className
          >
            demo2 detail 4
          </NavLink>
          
        </li>
        <li>
          {/* 
            当路由是/demo2/detail/4 没有指定exact 也会激活路由
          */}
          <NavLink to="/demo2/detail"> demo2 detail</NavLink>
        </li>
        <li>
          {/* 
            当路由是/demo2/detail/4 没有指定exact 也会激活路由
            也支持 strict sensitive
          */}
          <NavLink to="/demo2/detail" exact strict sensitive> demo2 detail exact</NavLink>
        </li>
        <li>
          
          <NavLink 
          to="/demo2/detail/5" 
          // 
          isActive={(match, location) => {
            console.log('isactive', match, location);
            
            return true
          }}> demo2 detail 5</NavLink>

        </li>
        <li>
        
          <NavLink to="/demo2/detail/6"> demo2 detail 6</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default List