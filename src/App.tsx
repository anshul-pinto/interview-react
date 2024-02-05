import './App.css'
import React, { useEffect } from 'react'
import { getGeoLocationData } from './apis/get-geo-loc.api'
import { getProfileData } from './apis/get-profile.api'

function App() {
  useEffect(() => {
    getGeoLocationData()
    getProfileData()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
