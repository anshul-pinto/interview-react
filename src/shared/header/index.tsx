import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className="App-header">
      <img
        src="https://assets-global.website-files.com/55329745dfdcc63850d00739/64092181f1b5f96df4b0c063_Vectors-Wrapper.svg"
        width={166}
        height={57}
        className="header-icon"
      />
      <nav className="header-nav">
        <Link className="link" to={'/'}>
          Home
        </Link>
        <Link className="link" to={'/profile'}>
          Profile
        </Link>
      </nav>
    </header>
  )
}
