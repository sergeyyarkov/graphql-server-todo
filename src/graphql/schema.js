const { GraphQLSchema } = require('graphql')
const { Query } = require('./typeDefs/query')

module.exports = new GraphQLSchema({
  query: Query,
})
