const Connection = require('../config/connection');

const getdata = () => Connection.query('SELECT * FROM recipe;');

module.exports = {
  getdata,
};
