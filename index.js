const express = require('express')
const bodyParser = require('body-parser')
const app = express()
// const port = 4000
const port = 'https://back-p-tecnica-2.vercel.app/'
const db = require('./src/queries')

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })

  app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })

  app.get('/users', db.getUsers)
  app.get('/users/:id', db.getUserById)
  app.post('/users', db.createUser)
  app.put('/users/:id', db.updateUser)
  app.delete('/users/:id', db.deleteUser)