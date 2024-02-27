import React from 'react'
import { Link } from 'react-router-dom'

export const HomePage = () => {
  return (
    <div className="App">
      <p className="App-header">Home Page</p>

      <ul
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <li>
          <Link to={'/stepper'}>Stepper</Link>
        </li>
        <li>
          <Link to={'/file-explorer'}>File Explorer</Link>
        </li>
        <li>
          <Link to={'/progress'}>Progress</Link>
        </li>
        <li>
          <Link to={'/infinite-scroll'}>Infinite Scroll</Link>
        </li>
      </ul>
    </div>
  )
}
