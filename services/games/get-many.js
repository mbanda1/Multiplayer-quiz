import { getGamesDB } from '../../db/games.js';

export const getGamesService = async (filters) => getGamesDB(filters);
