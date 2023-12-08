import { TypesValues } from '../../schemas/constants.js';
import { getGamesService } from '../../services/games/get-many.js';

const routes = function (fastify, options, next) {
    fastify.route({
        method: 'GET',
        url: '/',
        schema: {
            querystring: {
                type: 'object',
                additionalProperties: false,
                properties: {
                    players: { type: 'number', minLength: 2},
                    type: { type: 'string', enum: TypesValues },
                },
            },
        },
        handler: async (request, reply) => {
            const { filter } = request.query;
            const { games } = await getGamesService(filter);

            reply.send(games);
        }
    })
    next()
};

export default routes;
