const { Client } = require('pg');
const connectionInfo = {
  database: 'school',
  user: 'postgres',
  password: 'postgres',
  host: 'localhost',
  port: 5431,
};
const makeClient = () => {
  return new Client(connectionInfo);
};

module.exports = makeClient;
