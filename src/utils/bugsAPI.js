import tokenService from "./tokenService"

const BASE_URL = '/api/bugs/'


export function getAll() {
  return fetch(BASE_URL, {
      headers: {
        'Authorization': 'Bearer ' + tokenService.getToken()
      }
    })
    .then(res => {
      if (res.ok) return res.json()
      throw new Error('Problem Fetching Gel All')
    })
}