import { pool } from '../index.mjs';

const createTables = async () => {
  const createTablesQuery = `
    CREATE TABLE IF NOT EXISTS games (
      id SERIAL PRIMARY KEY,
      players INTEGER,
      type VARCHAR(36) CHECK (type IN ('indoor', 'field', 'road')),
      details TEXT,
      created_at TIMESTAMPTZ DEFAULT NOW()
    );
  `;


  const seedDataQuery = `
  INSERT INTO games (id, players, type, details) VALUES
    (1, 3, 'indoor', 'table tennis'),
    (2, 12, 'field', 'football'),
    (3, 30, 'road', 'cycling')
`;


  try {
    await pool.query(createTablesQuery);
    await pool.query(seedDataQuery);

    console.log('Tables created and seeded.');
  } catch (error) {
    console.error('Error creating tables:', error);
  }
};

createTables();
