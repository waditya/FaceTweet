const config = {
  env: process.env.NODE_ENV || 'development', //To differentiate between development and production mode
  port: process.env.PORT || 3000, //To define the listening port for the server
  jwtSecret: process.env.JET_SECRET || "YOUR_secret_key", //The secret key to be used to sign JWT
  mongoUri: process.env.MONGODB_URI || //The location of the MongoDB database for the project
    process.env.MONGO_HOST ||
    'mongodb://'+(process.env.IP || 'localhost')+':'+(process.env.MONGO_PORT || '27017')+'/facetweet'
}//

export default config
