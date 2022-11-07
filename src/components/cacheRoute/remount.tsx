import React, {cloneElement, useRef} from 'react'

const Remount: React.FC<any> = (props) => {

  const keyRef = useRef(Math.random() + (new Date()).valueOf())

  if (props.shouldRemount) {
    keyRef.current = Math.random() + (new Date()).valueOf()
  }

  return cloneElement(React.Children.only(props.children), {
    key: keyRef.current
  })
}

export default Remount