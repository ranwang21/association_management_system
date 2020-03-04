const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const errorHandler = require('./middlewares/error')
const connectDB = require('./configs/db')

const app = express()

// LOAD ENV VARS
dotenv.config({ path: './configs/config.env' })

// MIDDLEWARES
app.use(express.json())
app.use(morgan('dev'))

// ROUTE FILES
const roles = require('./routes/roles')

// MOUNT ROUTERS
app.use('/roles', roles)

// MAIN ROUTES
app.get('/', (req, res) => {
  res.send("La Maison d'Aurore API")
})

// ERROR HANDLER MIDDLEWARE
app.use(errorHandler)

// CONNECT TO DATABASE
connectDB()

// CONNECT TO SERVER
const PORT = process.env.PORT || 8080
const server = app.listen(PORT, () => {
  console.log('Server listening on: http://localhost:%s', PORT)
})

// HANDLE UNHANDLED PROMISE REJECTIONS
process.on('unhandledRejection', err => {
  console.log('Error:', err.message)
  // CLOSE SERVER & EXIT PROCESS
  server.close(() => process.exit(1))
})
