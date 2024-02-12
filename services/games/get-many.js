import { getGamesDB } from '../../db/games.js';
import { getGamesOrm } from '../../db/games-orm-implementation.js'

export const getGamesService = async (filters) => getGamesDB(filters);

export const getGamesServiceByOrm = async () => {
    try {
        const games = await getGamesOrm();
        console.log({xxx:games})
        return games
    } catch (error) {
        console.log(error)
    }

};