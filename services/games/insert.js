import { insetGameOrm } from '../../db/games-orm-implementation.js';
import { insertGameDB } from '../../db/games.js';
import { generateRandomUniqueNumber } from '../../schemas/constants.js';

export const insertGameService = async (requestData) => {
    const data = {id: generateRandomUniqueNumber(), ...requestData}
    return insertGameDB(data);
}


export const insertGameServiceByOrm = async (data) => {
    try {
        const game = await insetGameOrm(data);
        return game.id
    } catch (error) {
        console.log(error)
    }

};

