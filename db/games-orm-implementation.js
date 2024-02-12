import db from '../models/index.js'

export const getGamesOrm = () => db.gamesOrms.findAll({
    attributes: ['id', 'players', 'type', 'details']
})

export const insetGameOrm = (data) => db.gamesOrms.create(data);
