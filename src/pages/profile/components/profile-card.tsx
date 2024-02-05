import React, { useRef, useState } from 'react'
import { useStorage } from '../../../shared/hooks/useStorage'
import { LOCAL_STORAGE_KEYS } from '../constants'
import './profile.css'
import { getGeoLocationData } from '../../../apis/get-geo-loc.api'

interface IProfileCardProps {
  email: string
  username: string
  displayName: string
  avatarURI: string
  location: string
}
//Email, Username, Display name, and Avatar URI comes from API

type TLocalStorageProfile = {
  name: string
  age: number
  gender: string
  location: string
  interest1: string
  interest2: string
  email: string
  username: string
  displayName: string
  avatarURI: string
}

export const ProfileCard: React.FC<IProfileCardProps> = ({
  username,
  email,
  displayName,
  avatarURI,
  location,
}) => {
  const storage = useStorage('localStorage')
  const locRef = useRef<HTMLInputElement>()
  const profileLocalStorageData: TLocalStorageProfile = JSON.parse(
    storage.getItem(LOCAL_STORAGE_KEYS.PROFILE_DETAILS)
  )
  const [editableFields, setEditableFields] = useState({
    name: profileLocalStorageData?.name || '',
    age: profileLocalStorageData?.age || '',
    gender: profileLocalStorageData?.gender || '',
    location: profileLocalStorageData?.location
      ? profileLocalStorageData?.location
      : location,
    interest1: profileLocalStorageData?.interest1 || '',
    interest2: profileLocalStorageData?.interest2 || '',
    email,
    username,
    displayName,
    avatarURI,
  })

  const handleInputChange = (
    field: keyof TLocalStorageProfile,
    value: string | number
  ) => {
    setEditableFields((prevFields) => ({
      ...prevFields,
      [field]: value,
    }))
  }

  const onClickGetLocation = () => {
    getGeoLocationData().then((locData) => {
      if (locData) {
        locRef.current.value = locData.city
        handleInputChange('location', locData.city)
      }
    })
  }

  const handleSaveChanges = () => {
    // Save the updated fields to local storage or send them to the API
    // You can customize this part based on your application's needs
    console.log('Saving changes:', editableFields)
    // For example, save to local storage
    localStorage.setItem(
      LOCAL_STORAGE_KEYS.PROFILE_DETAILS,
      JSON.stringify(editableFields)
    )
  }

  return (
    <div className="ProfileCard">
      <div
        style={{
          marginTop: '100px',
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <img
          src={editableFields.avatarURI}
          alt="Avatar"
          width={100}
          height={100}
          style={{ borderRadius: '50%', width: '100px' }}
        />
        <div
          style={{
            width: '100%',
          }}
        >
          <div className="formRow">
            <div className="inputField">
              <label>Name:</label>
              <input
                type="text"
                value={editableFields.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
              />
            </div>
            <div className="inputField">
              <label>Age:</label>
              <input
                type="number"
                value={editableFields.age}
                onChange={(e) =>
                  handleInputChange('age', Number(e.target.value))
                }
              />
            </div>
          </div>
          <div className="formRow">
            <div className="inputField">
              <label>Gender:</label>
              <input
                type="text"
                value={editableFields.gender}
                onChange={(e) => handleInputChange('gender', e.target.value)}
              />
            </div>
            <div className="inputField">
              <label>Location:</label>
              <input
                ref={locRef}
                type="text"
                value={editableFields.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
              />
              <p
                style={{
                  fontSize: 12,
                  whiteSpace: 'nowrap',
                  textDecoration: 'underline',
                  cursor: 'pointer',
                }}
                onClick={() => {
                  onClickGetLocation()
                }}
              >
                Get Location
              </p>
            </div>
          </div>
          <div className="formRow">
            <div className="inputField">
              <label>Interest 1:</label>
              <input
                type="text"
                value={editableFields.interest1}
                onChange={(e) => handleInputChange('interest1', e.target.value)}
              />
            </div>
            <div className="inputField">
              <label>Interest 2:</label>
              <input
                type="text"
                value={editableFields.interest2}
                onChange={(e) => handleInputChange('interest2', e.target.value)}
              />
            </div>
          </div>
          <div className="formRow">
            <div className="inputField">
              <label>Email:</label>
              <input
                type="email"
                value={editableFields.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
              />
            </div>
            <div className="inputField">
              <label>Username:</label>
              <input
                type="text"
                value={editableFields.username}
                onChange={(e) => handleInputChange('username', e.target.value)}
              />
            </div>
          </div>
          <div className="formRow">
            <div className="inputField">
              <label>Display Name:</label>
              <input
                type="text"
                value={editableFields.displayName}
                onChange={(e) =>
                  handleInputChange('displayName', e.target.value)
                }
              />
            </div>
          </div>
          <div>
            <button onClick={handleSaveChanges}>Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  )
}
