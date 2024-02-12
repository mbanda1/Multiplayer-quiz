import db from '../models/index.js'

export const getGamesOrm = () => db.gamesOrms.findAll({
    attributes: ['id', 'players', 'type']
})
