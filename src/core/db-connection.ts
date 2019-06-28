import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
    dialect: 'sqlite',
    logging: true,
    storage: './database.sqlite'
})

export const models = {
    sequelize,
    Sequelize
}
