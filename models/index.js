'use strict';

import { readdirSync, readFileSync } from 'fs';
import { basename as _basename, join } from 'path';
import Sequelize, { DataTypes } from 'sequelize';
import { env as _env } from 'process';

import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';

// Get the current file URL
const currentFileUrl = import.meta.url;

// Convert the file URL to a file path
const currentFilePath = fileURLToPath(currentFileUrl);

// Get the directory name
const currentDir = dirname(currentFilePath);

// Construct the path to config.json
const configPath = join(currentDir, '..', 'config', 'config.json');

// Read the JSON file synchronously
const jsonData = fs.readFileSync(configPath, 'utf8');
const env = process.env.NODE_ENV || 'development';

// Parse the JSON data
const config = JSON.parse(jsonData)[env];

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const db = {};

let sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect
});

readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== _basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1 &&
      file.indexOf('index.js') === -1
    );
  })
  .forEach(file => {
    import(join('file://', __dirname, file)).then(module => {
      const model = module.default(sequelize, DataTypes);
      db[model.name] = model;
    });
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
