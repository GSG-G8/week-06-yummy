const connection = require('../server/database/config/connection');

const buildDB = require('../server/database/config/bulit');

const { getdata } = require('../server/database/queries/getdata');

// test('jest is working', () => {
//   expect(1).toBe(1);
// });

beforeAll(() => {
  return buildDB();
});

afterAll(() => {
  return connection.end();
});


test('test getdata query', () => {
return getdata().then((data) => {
    const actual = data.rows[0];
    const expected = {
      id: 1,
      name: 'Quick banana ice cream',
      ingredients: '4 ripe bananas, cut into chunks,3-4 tbsp milk, 2 tbsp toasted flaked almonds, 2 tbsp ready-made toffee or chocolate sauce', 
      preparation: 'Pop the banana chunks on a flat tray and cover well. Freeze for at least 1 hr, or until frozen through. When ready to eat throw the banana into a food processor and whizz until smooth with enough of the milk to achieve a creamy texture. Scoop into 4 bowls or glasses, then top with the sauce and nuts.',
      imgurl: 'https://www.bbcgoodfood.com/sites/default/files/recipe_images/recipe-image-legacy-id--653634_11.jpg' 
    };
    expect(actual).toEqual(expected);
  });
});
