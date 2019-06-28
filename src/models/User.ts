import { Model, DataTypes } from "sequelize";
import { sequelize } from "../core/db-connection"
import { Options, Attribute } from 'sequelize-decorators'
import { ObjectType, Field } from "type-graphql";

// NEEDED FOR SEQULIZE
@Options({
  sequelize,
  tableName: 'user'
})
// NEEDED FOR GRAPHQL
@ObjectType()
export class User extends Model {
  @Field()
  @Attribute(DataTypes.STRING)
  public firstName: string

  @Field()
  @Attribute(DataTypes.STRING)
  public lastName: string
}