import db from '../models/index.js'

export const getGamesOrm = () => db.gamesOrm.findAll({
    attributes: ['id', 'players', 'type']
})
