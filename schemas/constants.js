import pino from 'pino';

export const Types = {
    indoor: 'indoor',
    field: 'field',
    road: 'road'
}

export const TypesValues = Object.values(Types)

export const logger = pino({
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: true
        }
    }
})