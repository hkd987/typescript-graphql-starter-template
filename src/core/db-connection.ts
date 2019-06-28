import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize({
    dialect: 'sqlite',
    logging: (log) => console.log(log),
    storage: './database.sqlite'
})

export interface models {
    sequelize: Sequelize
    Sequelize: typeof Sequelize
}

export const models = {
    sequelize,
    Sequelize
}
