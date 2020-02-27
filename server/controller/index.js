const express = require('express');
const recipe = require('./recipe');

const router = express.Router();

router.get('/recipe', recipe.getrecipe);
router.post('/create-recipe', recipe.postrecipe);

module.exports = router;
