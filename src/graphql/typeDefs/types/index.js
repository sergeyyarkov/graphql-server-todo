const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
} = require('graphql')

const Notes = require('../../models/note')
const Categories = require('../../models/category')

const NoteType = new GraphQLObjectType({
  name: 'Note',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    categoryId: { type: GraphQLID },
    category: {
      type: CategoryType,
      resolve(parent, args) {
        return Categories.findById(parent.categoryId)
      },
    },
  }),
})

const CategoryType = new GraphQLObjectType({
  name: 'Category',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    notes: {
      type: new GraphQLList(NoteType),
      resolve(parent, args) {
        return Notes.find({ categoryId: parent.id })
      },
    },
  }),
})

module.exports = {
  NoteType,
  CategoryType,
}
