const { getdata } = require('../database/queries/getdata');
const { postdata } = require('../database/queries/postdata');


exports.getrecipe = (req, res) => {
  getdata()
    .then((result) => {
      res.json(result.rows);
    })
    .catch((err) => console.log('err:', err));
};

exports.postrecipe = (req, res) => {
  const recipeInfo = req.body;
  postdata(recipeInfo)
    .then(() => res.redirect('/'))
    .catch((err) => console.log('err:', err));
};
