import { logger } from '../schemas/constants.js';
import { getClient } from './index.mjs';

const dbFields = `
  games.id,
  games.players,
  games.type,
  games.details
  `;

export const insertGameDB = async (data) => {

  const query = 'INSERT INTO games (id, players, type, details) VALUES ($1, $2, $3, $4)';

  const client = await getClient();
  try {
    await client.query(query, [data.id, data.players, data.type, data.details]);
    logger.info('Game inserted')
  } catch (error) {
    logger.error(`Error inserting data into DB, ${error}`)
  }
  finally {
    client.release();
  }
};


export const getGamesDB = async (filterParams) => {
  logger.info('Fetching games from DB')

  const { values, conditions } = buildFilter(filterParams)

  const query = `
              SELECT 
              ${dbFields}
              FROM games
              WHERE 1 = 1 ${conditions}`;

  const client = await getClient();
  try {
    const result = await client.query(query, values);
    logger.info('Fetched games from DB')

    return {
      games: result.rows ? result.rows : [],
    }

  } catch {
    logger.error('Error fetching games from DB')
  } finally {
    client.release();
  }
};


export const getGameDB = async (id) => {
  logger.info('Fetching game from DB by id')

  const query = `
              SELECT 
              ${dbFields}
              FROM games
              WHERE id = $1`;

  const client = await getClient();
  try {
    const result = await client.query(query, [id]);
    logger.info('Fetched game from DB by id')

    return result.rows && result.rows[0]
  } catch {
    logger.error('Error fetching a game by id')
  } finally {
    client.release();
  }
};


const buildFilter = (filterObject) => {
  const values = [];
  const conditions = [];

  if (filterObject && Object.keys(filterObject).length > 0) {
    Object.keys(filterObject).forEach((key) => {
      if (filterObject[key] !== null && filterObject[key] !== undefined) {
        values.push(filterObject[key]);
        conditions.push(`${key} = $${values.length}`);
      }
    });
  }

  return {
    values,
    conditions: conditions.length > 0 ? `${conditions.join(' AND ')}` : '',
  };
};