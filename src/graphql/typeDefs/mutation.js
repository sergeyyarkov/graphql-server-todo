const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLNonNull,
} = require('graphql')
const { NoteType, CategoryType } = require('./types/index')

const Notes = require('../models/note')
const Categories = require('../models/category')

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addCategory: {
      type: CategoryType,
      args: { title: { type: new GraphQLNonNull(GraphQLString) } },
      resolve(parent, args) {
        return new Categories({
          title: args.title,
        }).save()
      },
    },
    addNote: {
      type: NoteType,
      args: {
        title: { type: new GraphQLNonNull(GraphQLString) },
        categoryId: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return new Notes({
          title: args.title,
          createdAt: new Date().toISOString(),
          categoryId: args.categoryId,
        }).save()
      },
    },
  },
})

module.exports = {
  Mutation,
}
