import { insertGameDB } from '../../db/games.js';
import { generateRandomUniqueNumber } from '../../schemas/constants.js';

export const insertGameService = async (requestData) => {
    const data = {id: generateRandomUniqueNumber(), ...requestData}
    return insertGameDB(data);
}


