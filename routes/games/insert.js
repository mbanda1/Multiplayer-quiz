import { TypesValues } from '../../schemas/constants.js';
import { insertGameService } from '../../services/games/insert.js';

const routes = function (fastify, options, next) {
    fastify.route({
        method: 'POST',
        url: '/',
        schema: {
            description: '',
            body: {
                type: 'object',
                required: ['players', 'type'],
                additionalProperties: true,
                properties: {
                    players: { type: 'number', minLength: 2},
                    type: { type: 'string', enum: TypesValues },
                    details: { type: ['string', 'null'], maxLength: 255 },
                },
            },
        },
        handler: async (request, reply) => {
            const result = await insertGameService(request.body);
            return reply.code(200).send(result)
        }
    })
    next()
};

export default routes;
