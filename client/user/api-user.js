// Create a New User
// React Component access the API endpoints exposed by the backend using the fetch API

//Use fetch to make network requests

const create = (user) => {
  return fetch('/api/users', {
    method:'POST',
    headers:{
      'Accept':'application/json',
      'Content-Type':'application/json'
    },
    body: JSON.stringify(user)
  }).then((response)=>{
    return response.json()
  }).catch((err)=>{
    console.log(err);
  })
}

// Listing Users
// GET call to retrieve all the users in the database
const list = () =>{
  return fetch('/api/users', {
    method: 'GET'
  }).then((response)=>{
    return response.json()
  }).catch((err)=>{
    console.log(err);
  })
}

// Reading a user profile

//The JWT is attached to the fetch call in the header using the
// GET Authorization Bearer scheme, and then the response from the server is returned
// to the component in a promise.

const read = (params, credentials) =>{
    return fetch(`/api/users/{params.userId}`, {
      method:'GET',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json',
        'Authorization':'Bearer '+ credentials.t
      }
    }).then((response) => {
      return response.json()
    }).catch((err)=> {
      console.log(err);
    })
}

// Updating a user's database

// The update method will take changed user data from the view component for a specific
// user, then use fetch to make a PUT call to update the existing user in the backend. This is
// also a protected route that will require a valid JWT as credential.

const update = (param, credentials, user) => {
  return fetch('api/users/'+params.userId, {
    method:'PUT',
    headers: {
      'Accept':'application/json',
      'Content-Type':'application/json',
      'Authorization':'Bearer '+ credentials.t
    },
    body:JSON.stringify(user)
  }).then((response) => {
    return response.json()
  }).catch((err)=>{
    console.log(err);
  })
}

// Deleting a Users
const remove = (params, credentials) => {
  return fetch('/api/users/' + params.userId, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + credentials.t
    }
  }).then((response) => {
    return response.json()
  }).catch((err)=> {
    console.log(err);
  })


  // Export the User API helper methods so that they could be imported and
  // used by React components

  export { create, list, read, update, remove }
