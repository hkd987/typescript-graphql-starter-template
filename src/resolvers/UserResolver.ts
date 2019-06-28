import { Resolver, Query, Arg } from "type-graphql";
import { User } from "../models/User";

@Resolver(User)
export class UserResolver {
  @Query(() => User)
  async getUser(
    @Arg('id') id: number
  ) {
    const user = await User.findOne(id as any)
    return user
  }
}
