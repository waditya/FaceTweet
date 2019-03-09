import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'

import Template from './../template'
import authRoutes from './routes/auth.routes'
import userRoutes from './routes/user.routes'

//To serve static files to express


const app= express()

/* Configure Express */
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser())
app.use(compress())
app.use(helmet())
app.use(cors())

app.use('/', authRoutes)
app.use('/', userRoutes)


//Handle authentication related erros thrown by express-jwt while JWT token validation during incoming requests
app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({
      "error" : err.name + ": " + err.message
    })
  }
})


app.get('/', (req, res)=>{
  res.status(200).send(Template())
})


export default app
