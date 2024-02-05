import { mockProfileData } from '../__mock__/mock-profile-data'
import { ARTIFACT_BE_TOKEN } from '../secrets'

export const getProfileData = () => {
  const options = {
    method: 'GET',
    headers: {
      Authorization: ARTIFACT_BE_TOKEN,
    },
  }
  return fetch(`/v2/users/me`, options)
    .then((response) => response.json())
    .then((response) => {
      if (response && response.profile) return response.profile
      else return mockProfileData.profile
    })
    .catch((err) => {
      console.error('Unexpected error', err)
    })
}
