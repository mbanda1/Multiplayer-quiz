import { getGamesDB } from '../../db/games.js';
import { getGamesOrm } from '../../db/games-orm-implementation.js'

export const getGamesService = async (filters) => getGamesDB(filters);

export const getGamesServiceByOrm = async () => {
    try {
        const games = await getGamesOrm();
        return games[0]
    } catch (error) {
        console.log(error)
    }

};