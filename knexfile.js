// Update with your config settings.
const dotenv = require('dotenv');

dotenv.config();

module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      host: process.env.DB_DEVELOPMENT_HOST || '127.0.0.1',
      port: process.env.DB_DEVELOPMENT_PORT || '3306',
      database: process.env.DB_DEVELOPMENT_NAME || 'database',
      user: process.env.DB_DEVELOPMENT_USER || 'root',
      password: process.env.DB_DEVELOPMENT_PASSWORD || '',
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations:{
      tablename: 'knex_migrations'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'mysql2',
    connection: {
      host: process.env.DB_PROD_HOST || '127.0.0.1',
      port: process.env.DB_PROD_PORT || '3306',
      database: process.env.DB_PROD_NAME || 'database',
      user: process.env.DB_PROD_USER || 'root',
      password: process.env.DB_PROD_PASSWORD || '',
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations:{
      tablename: 'knex_migrations'
    }
  }

};
