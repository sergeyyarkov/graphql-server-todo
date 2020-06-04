const { GraphQLSchema } = require('graphql')
const { Mutation } = require('./typeDefs/mutation')
const { Query } = require('./typeDefs/query')

module.exports = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
})
