const signin = (user) => {
  return fetch('/auth/signin/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(user)
    }).then((response) => {
      return response.json()
    }).catch((err) => console.log(err))
}


// Sign-out

// The signout method will use fetch to make a GET call to the signout API endpoint on the
// server.

const signout = () => {
  return fetch('/auth/signout/', {
      method: 'GET',
    }).then(response => {
return response.json()
    }).catch((err) => console.log(err))
}

// Export the signin and signout methods
export { signin, signout }
