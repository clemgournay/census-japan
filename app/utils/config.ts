export const GetApiOptions = (): RequestInit => {
  return {
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      'X-API-KEY': process.env.API_KEY ? process.env.API_KEY : ''
    }
  }
}