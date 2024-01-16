import { getClient } from '../index.mjs';

const resetDatabase = async () => {
    const resetProcedure = `
      -- Create a stored procedure to drop all tables in the database
      DO $$
      DECLARE
        table_rec RECORD;
      BEGIN
        -- Loop through all tables and drop them
        FOR table_rec IN SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' AND table_type = 'BASE TABLE' LOOP
          EXECUTE 'DROP TABLE IF EXISTS ' || table_rec.table_name || ' CASCADE';
        END LOOP;
      END $$;
    `;
  
    
    try {
     const client = await getClient();
     await client.query(resetProcedure);
     client.release();
      console.log('All tables dropped successfully.');
    } catch (error) {
      console.error('Error dropping tables:', error);
    }
  };

resetDatabase();
