const { Client } = require('pg');

const client = new Client({
  user: 'sdc_user',
  database: 'sdc',
  port: 5432,
});

client
  .connect()
  .then(() => console.log('Connected to PostgreSQL successfully!'))
  .then(() => client.query('SELECT * FROM listings WHERE id = 1'))
  .then((results) => console.table(results.rows))
  .catch((e) => console.log(e))
  .finally(() => client.end());
