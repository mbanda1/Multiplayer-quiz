// ESM
import Fastify from 'fastify';
import env from 'dotenv';
import path from 'path'
import {pool} from './db/index.mjs';
import {logger} from './schemas/constants.js'
import fastifyAutoload from '@fastify/autoload';
import { fileURLToPath } from 'url';

env.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fastify = Fastify({
  logger: true,
});


(async () => {
  const client = await pool.connect();
  try {
    const { rows } = await client.query('SELECT current_user');
    const currentUser = rows[0].current_user;
    logger.info({ currentUser })
  } catch (error) {
    logger.error({ error });
  } finally {
    client.release()
  }
})();

fastify.register(fastifyAutoload, {
  dir: path.join(__dirname, 'routes'),
  options: {},
})

const start = async () => {
  try {
    await fastify.listen({ port: 3000, host: '0.0.0.0' });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};


start();
