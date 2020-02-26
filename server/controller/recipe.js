const { getdata } = require('../database/queries/getdata');


exports.getrecipe = (req, res) => {
  getdata()
    .then((result) => {
      res.json(result.rows);
    })
    .catch((err) => console.log('err:', err));
};
