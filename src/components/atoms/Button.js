import React from 'react'
import { NavLink } from 'react-router-dom'

const Button = ({ label, type, children, ...props }) => {
  const { to, href } = props
  if (to) {
    return <NavLink className="button" {...props}>
            { children }
            <span>{ label }</span>
          </NavLink>
  } if (href) {
    return <a className="button" {...props}>
            { children }
            <span>{ label }</span>
          </a>
  }
  return <button {...props} type={type}>
          { children }
          <span>{ label }</span>
        </button>
}

export default Button