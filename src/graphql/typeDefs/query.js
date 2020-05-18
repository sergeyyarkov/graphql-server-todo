const { GraphQLObjectType, GraphQLID, GraphQLList } = require('graphql')
const { notes, categories } = require('../data/index')
const { NoteType, CategoryType } = require('./types/index')

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    note: {
      type: NoteType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return notes.find((note) => note.id === args.id)
      },
    },
    category: {
      type: CategoryType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return categories.find((category) => category.id === args.id)
      },
    },
    notes: {
      type: new GraphQLList(NoteType),
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return notes
      },
    },
    categories: {
      type: new GraphQLList(CategoryType),
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return categories
      },
    },
  },
})

module.exports = {
  Query,
}
