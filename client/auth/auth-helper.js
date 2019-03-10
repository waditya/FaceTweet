// Helper methods to manage auth state across the components
// Custom PrivateRoute component to add protected routes to the frontend.

// Helper methods to store and retrieve JWT credentials from client-side sessionStorage, and also clear out the
// sessionStorage on user sign-out


// Save credentials on successful sign-in

// SINGLETON DESIGN PATTERN IS USED HERE


authenticate(jwt, cb) {
  if(typeof window !== "undefined")
    sessionStorage.setItem('jwt', JSON.stringify(jwt))
    cb() //Callback function
}

// Retrieve credentials if signed-in

isAuthenticated() {
  if (typeof window == "undefined")
    return false
    if (sessionStorage.getItem('jwt'))
      return JSON.parse(sessionStorage.getItem('jwt'))
    else
      return false
}


// signout

signout(cb) {
  if(typeof window !== "undefined")
    sessionStorage.removeItem('jwt')
  cb()
  signout().then((data) => {
      document.cookie = "t=; expires=Thu, 01 Jan 1970 00:00:00
      UTC; path=/;"
    })
}
