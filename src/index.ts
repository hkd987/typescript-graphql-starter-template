import "reflect-metadata";
import { ApolloServer } from 'apollo-server'
import { createSchema } from "./core/schema-builder"
import { GraphQLResponse } from "graphql-extensions";
import { GraphQLRequest } from "apollo-server-core";

async function main() {
  const schema = await createSchema()

  const server = new ApolloServer({
    schema,
    context: ({ res, req }: { res: GraphQLResponse, req: GraphQLRequest }) => ({
      res,
      req,
    }),
    playground: true
  })

  const { url } = await server.listen(4000);
  console.log(`Server is running, GraphQL Playground available at ${url}`);
}

main().catch(error => console.log(error))
