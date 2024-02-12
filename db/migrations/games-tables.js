import { getClient } from '../index.mjs';

const createTables = async () => {
  const createTablesQuery = `
    CREATE TABLE IF NOT EXISTS games (
      id SERIAL PRIMARY KEY,
      players INTEGER,
      type VARCHAR(36) CHECK (type IN ('indoor', 'field', 'road')),
      details TEXT,
      createdAt TIMESTAMPTZ DEFAULT NOW()
    );
  `;


  const seedDataQuery = `
  INSERT INTO games (id, players, type, details) VALUES
    (1, 3, 'indoor', 'table tennis'),
    (2, 12, 'field', 'football'),
    (3, 30, 'road', 'cycling')
`;


  try {
    const client = await getClient();

    await client.query(createTablesQuery);
    await client.query(seedDataQuery);
    client.release();

    console.log('Tables created and seeded.');
  } catch (error) {
    console.error('Error creating tables:', error);
  }
};

createTables();
