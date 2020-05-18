const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./graphql/schema')

const server = express()
const PORT = 3001

server.use('/graphql', graphqlHTTP({ schema, graphiql: true }))

server.listen(PORT, () => console.log(`🚀 App is running on port ${PORT}`))
