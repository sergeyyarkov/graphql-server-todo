const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./graphql/schema')
const mongoose = require('mongoose')

const server = express()
const PORT = 3001

server.use('/graphql', graphqlHTTP({ schema, graphiql: true }))

mongoose.connect(
  'mongodb+srv://user:password@cluster0-1dsll.mongodb.net/todo-db?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true }
)

mongoose.connection.on('error', (err) =>
  console.log(`❌  Database error: ${err}`)
)
mongoose.connection.once('open', () => console.log('✔️  Database connected!'))

server.listen(PORT, () => console.log(`🚀 App is running on port ${PORT}`))
