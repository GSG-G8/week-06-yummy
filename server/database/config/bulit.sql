BEGIN;

DROP TABLE IF EXISTS recipe cascade;

CREATE TABLE recipe (
  id           SERIAL       PRIMARY KEY ,
  name         VARCHAR(255) NOT NULL,
  ingredients   text NOT NULL,
  preparation   text NOT NULL,
  img_url       text
);

INSERT INTO recipe (name, ingredients ,preparation , img_url) VALUES
  ('Quick banana ice cream',  '4 ripe bananas, cut into chunks,3-4 tbsp milk, 2 tbsp toasted flaked almonds, 2 tbsp ready-made toffee or chocolate sauce' ,'Pop the banana chunks on a flat tray and cover well. Freeze for at least 1 hr, or until frozen through. When ready to eat throw the banana into a food processor and whizz until smooth with enough of the milk to achieve a creamy texture. Scoop into 4 bowls or glasses, then top with the sauce and nuts.','https://www.bbcgoodfood.com/sites/default/files/recipe_images/recipe-image-legacy-id--653634_11.jpg'),
('Saucy bean baked eggs','2 x 400g cans cherry tomatoes, 400g can mixed bean salad, drained, 200g baby spinach,4 medium eggs, 50g thinly sliced smoked ham, torn,wholemeal rye bread, to serve (optional)','Tip the tomatoes and bean salad into an ovenproof frying pan or shallow flameproof casserole dish. Simmer for 10 mins, or until reduced. Stir in the spinach and cook for 5 mins more until wilted. 
Heat the grill to medium. Make four indentations in the mixture using the back of a spoon, then crack one egg in each. Nestle the ham in the mixture, then grill for 4-5 mins, or until the whites are set and the yolks runny. Serve with rye bread, if you like.','https://www.bbcgoodfood.com/sites/default/files/recipe/recipe-image/2020/01/saucy-bean-baked-eggs.jpg'),
('Satay chicken rice bowl' ,'175g Thai sticky rice (or 350g pre-cooked),100ml rice vinegar,1 tbsp caster sugar,½ cucumber, peeled into ribbons,2 tbsp sesame oil,1 tbsp soy sauce,4 tbsp smooth peanut butter,2 boneless and skinless chicken thighs,1 small red chilli, finely sliced,2 tbsp chopped peanuts','Toss together the cabbage, lime juice, coriander and ½ tsp salt in a bowl, then set aside.
Heat the oil in a non-stick frying pan over a medium heat. Add the chorizo and fry for 5 mins, then tip in the onion and pepper along with a pinch of salt and fry for 7-10 mins, or until the onions are golden and the peppers are beginning to soften. Stir in the garlic and paprika and fry for a further minute. Add the pinto beans and roughly crush half of them in the pan with the back of a wooden spoon. Season well and stir everything together.
Warm the tortillas through in a dry frying pan over a medium heat for around 30 seconds on each side. Fill with the bean mixture, red cabbage and the avocado.','https://www.bbcgoodfood.com/sites/default/files/recipe/recipe-image/2019/10/chorizo-red-cabbage-tacos.jpg'),
('Soured cream','300ml double cream,60ml natural yogurt,2 tbsp white wine vinegar,½ tbsp finely chopped chives, to serve,½ tsp fine sea salt, to serve','Pour the cream, yogurt and vinegar into a sterilised jar, put on the lid and shake well. Remove the lid and place a square of clean kitchen paper on top of the jar before sealing with a piece of string or rubber band.
Leave the soured cream overnight in a cool place, but not in the fridge. The next day you should have a thick, spoonable mixture. To serve, stir through the chives and sea salt, if you like. Will keep in the fridge for up to two days. ','https://www.bbcgoodfood.com/sites/default/files/recipe/recipe-image/2019/08/soured-cream.jpg'),
('Smashed cannellini bean tartine','400g can cannellini beans, drained and rinsed,2 tbsp rapeseed oil,1 large lemon, zested and juiced,1 small garlic clove, finely grated,1 small red chilli, deseeded and finely chopped,1⁄2 small bunch parsley, finely chopped,8 cherry tomatoes, halved,2 slices sourdough,15g feta, crumbled,50g rocket','Put the beans, 1 tbsp of the oil, the lemon zest and juice and the garlic in a food processor and blitz to create a chunky texture. Transfer to a bowl and stir through the chilli, parsley and cherry tomatoes.
Lightly toast the bread and pile on the cannellini bean smash, scatter over the feta and drizzle with the remaining oil. Serve with the rocket on the side.','https://www.bbcgoodfood.com/sites/default/files/recipe/recipe-image/2019/05/smashed-cannellini-bean-tartine.jpg');



COMMIT;