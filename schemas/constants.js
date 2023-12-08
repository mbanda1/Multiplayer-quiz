import pino from 'pino';
import { v4 as uuidv4 } from 'uuid';

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

export const uniqueID = uuidv4();


export const generateRandomUniqueNumber = () => Math.floor(Math.random() * 1000)