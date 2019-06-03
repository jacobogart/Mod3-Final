export const fetchPresData = () => {
  return fetch('http://localhost:3001/api/v1/presidents')
    .then(response => {
      if (!response.ok) {
        throw Error('Failed to get President data')
      } else {
        return response.json()
      }
    })
}