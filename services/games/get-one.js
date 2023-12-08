import { getGameDB } from '../../db/games.js';

export const getGameService = async (id) => getGameDB(id);
