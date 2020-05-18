const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
} = require('graphql')
const { categories, notes } = require('../../data/index')

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
        return categories.find((category) => category.id === parent.categoryId)
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
        return notes.filter((note) => note.categoryId === parent.id)
      },
    },
  }),
})

module.exports = {
  NoteType,
  CategoryType,
}
