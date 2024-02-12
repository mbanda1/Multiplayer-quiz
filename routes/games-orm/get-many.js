import { TypesValues } from '../../schemas/constants.js';
import { getGamesServiceByOrm } from '../../services/games/get-many.js';

const routes = function (fastify, options, next) {
    fastify.route({
        method: 'GET',
        url: '/',
        schema: {
            querystring: {
                type: 'object',
                additionalProperties: false,
                properties: {
                    id: { type: 'number', minLength: 1},
                    players: { type: 'number', minLength: 1},
                    type: { type: 'string', enum: TypesValues },
                },
            },
        },
        handler: async (request, reply) => {
            const { filter } = request.query;
            const { dataValues } = await getGamesServiceByOrm(filter);

            reply.send(dataValues);
        }
    })
    next()
};

export default routes;
