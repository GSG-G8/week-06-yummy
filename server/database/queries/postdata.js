const Connection = require('../config/connection');

const postdata = (userData) => {
  const {
    name, ingredients, preparation, imgurl,
  } = userData;
  const sql = {
    text: 'INSERT INTO recipe (name, ingredients, preparation, imgurl) VALUES ($1, $2 , $3, $4);',
    values: [name, ingredients, preparation, imgurl],
  };
  return Connection.query(sql);
};

module.exports = {
  postdata,
};
