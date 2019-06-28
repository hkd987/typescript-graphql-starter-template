import { models } from '../db-connection'

export interface context {
    res: Express.Response
    req: Express.Request
    models: models
}

export const context = ({ res, req }: { res: Express.Response, req: Express.Request }) => ({
    res,
    req,
    models
})