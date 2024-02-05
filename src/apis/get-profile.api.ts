import { ARTIFACT_BE_TOKEN } from "../secrets"

export const getProfileData = () => {
    const options = { method: 'GET', headers: {
      'Authorization': ARTIFACT_BE_TOKEN
    }}
    return fetch(
      `https://api-staging-0.gotartifact.com/v2/users/me`,
      options
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err))
  }