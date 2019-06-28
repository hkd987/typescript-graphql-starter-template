import "reflect-metadata";
import { ApolloServer } from 'apollo-server'
import { createSchema } from "./core/schema-builder"
import { models } from './core/db-connection'
import { GraphQLError } from "graphql";
import { formatError } from "./core/graphql-helpers/formatError";
import { formatResponse } from "./core/graphql-helpers/formatResponse";
import { dataSources } from "./core/graphql-helpers/dataSources";
import { context } from "./core/graphql-helpers/context";
import { GraphQLResponse } from "graphql-extensions";

async function main() {
  const schema = await createSchema()

  const server = new ApolloServer({
    schema,
    dataSources: () => dataSources(),
    context: ({ res, req }) => context({ res, req }),
    formatError: (error: GraphQLError) => formatError(error),
    formatResponse: (res: GraphQLResponse) => formatResponse(res),
    playground: true
  })

  const { url } = await server.listen(4000);
  console.log(`Server is running, GraphQL Playground available at ${url}`);
}

models
  .sequelize
  .sync({ force: true })
  .then(() => main())
  .catch((error: Error) => console.error(error))
