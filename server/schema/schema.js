import UserType from './user/user.type'
import ItemType from './item/item.type'

import RootQuery from './root-query/root-query.type'
import resolvers from './resolvers'

import { makeExecutableSchema } from 'graphql-tools'

// the schema type only has two properties: query and mutations
// the RootQuery contains the root entry points into graphQL
// If you want to define more entry points, you add to RootQuery
const SchemaDefinition = `
  schema {
    query: RootQuery
  }
`

const schema = makeExecutableSchema({
  // Add the type definitions to the schema
  typeDefs: [
    SchemaDefinition,
    RootQuery,
    UserType,
    ItemType
  ],
  // performs field lookups for a specific type
  resolvers
})

export default schema
