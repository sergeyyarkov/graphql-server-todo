const { GraphQLObjectType, GraphQLID, GraphQLList } = require('graphql')
const { NoteType, CategoryType } = require('./types/index')

const Notes = require('../models/note')
const Categories = require('../models/category')

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    note: {
      type: NoteType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Notes.findById(args.id)
      },
    },
    category: {
      type: CategoryType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Categories.findById(args.id)
      },
    },
    notes: {
      type: new GraphQLList(NoteType),
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Notes.find({})
      },
    },
    categories: {
      type: new GraphQLList(CategoryType),
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Categories.find({})
      },
    },
  },
})

module.exports = {
  Query,
}
