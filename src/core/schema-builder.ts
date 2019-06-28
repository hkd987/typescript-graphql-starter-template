import { buildSchema } from "type-graphql"
import { GraphQLSchema } from "graphql";

export const createSchema = (): Promise<GraphQLSchema> => {
    return buildSchema({
        resolvers: [],
        emitSchemaFile: true
    })
}