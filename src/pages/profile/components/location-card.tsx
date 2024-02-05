import React from 'react'
import { TLocationData } from '../../../apis/get-geo-loc.api'

interface ILocationCard {
  locationData: TLocationData
}
export const LocationCard: React.FC<ILocationCard> = ({ locationData }) => {
  const {
    city,
    region,
    country,
    postal_code,
    latitude,
    longitude,
    timezone,
    flag,
  } = locationData

  return (
    <div
      style={{
        maxWidth: '400px',
        margin: '20px auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        color: 'white',
      }}
    >
      <h2>Your Location Data</h2>
      <p>
        <strong>City:</strong> {city}
      </p>
      <p>
        <strong>Region:</strong> {region}
      </p>
      <p>
        <strong>Country:</strong> {country}{' '}
        <img
          src={flag.png}
          alt={country}
          style={{ marginLeft: '5px' }}
          height={20}
        />
      </p>
      <p>
        <strong>Postal Code:</strong> {postal_code}
      </p>
      <p>
        <strong>Latitude:</strong> {latitude}
      </p>
      <p>
        <strong>Longitude:</strong> {longitude}
      </p>
      <p>
        <strong>Timezone:</strong> {timezone.name} ({timezone.abbreviation})
      </p>
    </div>
  )
}
