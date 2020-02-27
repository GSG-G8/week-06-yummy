const { readFileSync } = require('fs');
const { join } = require('path');

const connection = require('./connection');


const buildDB = () => {
  const sql = readFileSync(join(__dirname, 'bulit.sql')).toString();
  return connection.query(sql);
};

module.exports = buildDB;
