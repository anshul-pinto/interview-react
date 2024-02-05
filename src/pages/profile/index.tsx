import { useEffect, useState } from 'react'
import { TLocationData, getGeoLocationData } from '../../apis/get-geo-loc.api'
import { getProfileData } from '../../apis/get-profile.api'
import React from 'react'
import { Header } from '../../shared/header'
import { ProfileCard } from './components/profile-card'
import { TProfile } from '../../__mock__/mock-profile-data'

export const ProfilePage = () => {
  const [profileApiData, setProfileApiData] = useState<TProfile>()

  const [locationData, setLocationData] = useState<TLocationData>()

  const getUserLocation = () => {
    getGeoLocationData().then((locData) => {
      if (locData) setLocationData(locData)
    })
  }

  useEffect(() => {
    getUserLocation()
    getProfileData().then((profileData): void => {
      setProfileApiData(profileData)
    })
  }, [])

  return (
    <div className="App">
      <Header />
      <div>
        {profileApiData && locationData && (
          <ProfileCard
            location={locationData.city}
            displayName={profileApiData.display_name}
            username={profileApiData.username}
            email={profileApiData.email}
            avatarURI={profileApiData.avatar_uri}
          />
        )}
      </div>
    </div>
  )
}
