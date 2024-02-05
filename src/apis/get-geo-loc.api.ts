import { ABSTRACT_API_KEY } from '../secrets'

export const getGeoLocationData = () => {
  const options = { method: 'GET' }
  return fetch(
    `https://ipgeolocation.abstractapi.com/v1?api_key=${ABSTRACT_API_KEY}`,
    options
  )
    .then((response) => response.json())
    .then((response) => response)
    .catch((err) => console.error(err))
}
