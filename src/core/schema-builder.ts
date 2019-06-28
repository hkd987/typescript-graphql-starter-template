import { buildSchema } from "type-graphql"
import { GraphQLSchema } from "graphql";
import { UserResolver } from '../resolvers/UserResolver'

export const createSchema = (): Promise<GraphQLSchema> => {
    return buildSchema({
        resolvers: [
            UserResolver
        ],
        emitSchemaFile: true
    })
}