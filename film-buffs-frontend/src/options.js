export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + `${import.meta.env.VITE_REACT_APP_API_KEY}`
    }
};