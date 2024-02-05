import { useEffect } from 'react'
import { getGeoLocationData } from '../../apis/get-geo-loc.api'
import { getProfileData } from '../../apis/get-profile.api'
import React from 'react'

export const ProfilePage = () => {
  useEffect(() => {
    getGeoLocationData()
    getProfileData()
  }, [])

  return (
    <div className="App">
      <header className="App-header">Profile Page</header>
    </div>
  )
}
