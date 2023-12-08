import { TypesValues } from '../../schemas/constants.js';
import { getGameService } from '../../services/games/get-one.js';

const routes = function (fastify, options, next) {
    fastify.route({
        method: 'GET',
        url: '/:id',
        schema: {
            params: {
                type: 'object',
                properties: { id: { type: 'string', minLength: 1 } },
            },
        },
        handler: async (request, reply) => {
            const { id } = request.params;
            const result = await getGameService(id);

            if (result) return reply.code(200).send(result)

            return reply.code(404).send(result)
        }
    })
    next()
};

export default routes;