import { Recipe } from "@/app/home/Home";

export interface Category {
  id: number;
  name: string;
  photo_url: string;
}

export const categories: Category[] = [
  {
    id: 3,
    name: "Chineese Food",
    photo_url:
      "https://www.thespruceeats.com/thmb/noIa6Wr8DKHmRlm9OH6dOHsHEbQ=/940x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/chinese-take-out-472927590-57d31fff3df78c5833464e7b.jpg",
  },
  {
    id: 1,
    name: "French Food",
    photo_url:
      "https://www.getflavor.com/wp-content/uploads/2019/01/4-Taureaux-Spread.jpg",
  },
  {
    id: 2,
    name: "Italian Food",
    photo_url:
      "https://images.unsplash.com/photo-1533777324565-a040eb52facd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
  },
  {
    id: 4,
    name: "Spanish Food",
    photo_url:
      "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/00/a0000467/img/basic/a0000467_main.jpg?20170412181722&q=80",
  },
  {
    id: 0,
    name: "Indian Food",
    photo_url:
      "https://www.quickanddirtytips.com/sites/default/files/styles/convert_webp_article_main_image/public/images/22646/traditional%20indian%20cuisine.png?itok=-rHiqUqU",
  },
];

export const recipes: Recipe[] = [
  {
    recipeId: 122,
    categoryId: 3,
    title: "Kung Pao chicken",
    photo_url:
      "https://www.seriouseats.com/thmb/LVYAe_ZpJ1s85mCg_sjTkVneRwM=/880x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2014__07__2021-02-12-Take-Out-Kung-Pao-Chicken-MHOM-11-c46f6c06713c45c5a287ddbf08779d04.jpg",
    photosArray: [
      "https://www.seriouseats.com/thmb/LVYAe_ZpJ1s85mCg_sjTkVneRwM=/880x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2014__07__2021-02-12-Take-Out-Kung-Pao-Chicken-MHOM-11-c46f6c06713c45c5a287ddbf08779d04.jpg",
      "https://www.lecremedelacrumb.com/wp-content/uploads/2020/06/kung-pao-chicken-1sm-3-1024x1536.jpg",
      "https://www.cookwithmanali.com/wp-content/uploads/2021/03/Kung-Pao-Cauliflower.jpg",
    ],
    time: 15,
    ingredients: [
      [0, "200ml"],
      [1, "5g"],
      [2, "300g"],
    ],
    description:
      "Combine all ingredients for the chicken in a shallow bowl; cover and marinate for 10 minutes (if time allows).Whisk sauce ingredients together until sugar dissolves; set aside.Heat a large skillet, pan or wok over high heat. Add 2 tablespoons of cooking oil, allow to heat up, then add marinated chicken. Fry chicken for 3-4 minutes while occasionally stirring, until edges are browned. Remove from heat and set aside. Add remaining cooking oil into the same pan/wok. Stir in garlic, ginger, chili diced peppers (capsicums) and Sichuan peppercorns and stir fry for 1 minute. Give the prepared sauce a mix, then pour it into the pan and bring it to a boil while stirring. Once it begins to thicken slightly, add chicken back into the pan/wok and mix all of the ingredients through the sauce until the chicken is evenly coated and sauce has thickened, (about 2 minutes). Stir in green onions, peanuts and sesame oil. Toss well and continue to cook for a further 2 minutes to infuse all of the flavours together. Serve immediately with steamed/cooked rice or fried rice!",
  },
  {
    recipeId: 3,
    categoryId: 4,
    title: "Paella",
    photo_url:
      "https://assets.jintravel.com/files/upload/blogs/what%20to%20eat%20in%20spain/paella-what-to-eat-in-spain-spanish-food-jintravel.com.jpg",
    photosArray: [
      "https://assets.jintravel.com/files/upload/blogs/what%20to%20eat%20in%20spain/paella-what-to-eat-in-spain-spanish-food-jintravel.com.jpg",
    ],
    time: 30,
    ingredients: [
      [15, "2 breasts"],
      [6, "1/2 lbs"],
      [0, "1/2 liters"],
      [13, "1/2 lbs"],
    ],
    description:
      "Marinate the Chicken , Allow the chicken to marinate in olive oil, paprika, oregano, salt, and pepper in the fridge for a few hours (or overnight).\n\n Cook the Rice, Heat olive oil in a paella pan and stir in garlic, red pepper flakes, and rice. \nAdd saffron, bay leaf, parsley, chicken stock, and lemon zest. Simmer rice for 20 minutes.\n\n Cook the Protein and Vegetables, Cook chicken, onion, bell pepper, chorizo, and shrimp until done. Then add to the rice mixture.",
  },
  {
    recipeId: 2,
    categoryId: 3,
    title: "Spring Rolls",
    photo_url:
      "https://avatars.dzeninfra.ru/get-zen_doc/4782316/pub_621e2cd440c1236e35c85c1c_621e2d74c7802f0e7223c1f0/scale_1200",
    photosArray: [
      "https://avatars.dzeninfra.ru/get-zen_doc/4782316/pub_621e2cd440c1236e35c85c1c_621e2d74c7802f0e7223c1f0/scale_1200",
    ],
    time: 30,
    ingredients: [
      [0, "2 quarts"],
      [16, "1"],
      [12, "1 cup"],
      [18, "1 cup"],
      [19, "1 teaspoon"],
      [1, "2 teaspoons"],
      [4, "1/4 teaspoons"],
      [7, "1/8 teaspoons"],
      [20, "1/2 teaspoons"],
      [21, "4"],
    ],
    description:
      "Heat the oil in a broad non-stick pan, add the garlic and ginger and saute on a high flame for 30 seconds.Add the onions and sauté on a high flame for 1 to 2 minutes.Add the capsicum and sauté on a high flame for 1 minute.Add the carrot, cabbage, noodles and cook on a high flame for 3 minutes, while stirring occasionally.Switch off the flame, add the schezuan sauce, tomato ketchup and salt and mix well. Keep aside. To make chinese veg spring roll, divide the stuffing into 7 equal portions and keep aside.Place a wrapper on a clean, dry surface and place a portion of the filing mixture in one corner of the wrapper.Roll over the wrapper till ¾th.Fold over from both the sides one by one towards the centre.Finally roll it completely and seal the edge using a little maida-water mixture.Repeat steps 2 to 5 to make 6 more rolls.Heat the oil in a deep non- stick pan and deep-fry, 2 spring rolls at a time on a medium flame, till they turn golden brown in colour from all the sides.Drain the on an absorbent paper and cut each spring roll diagonally into 3 equal pieces using a sharp knife.Serve the chinese veg spring roll immediately with schezaun sauce.",
  },
  {
    recipeId: 3,
    categoryId: 3,
    title: "Dim Sum",
    photo_url: "https://www.ndtv.com/cooks/images/vegetable.dim.sum.jpg",
    photosArray: ["https://www.ndtv.com/cooks/images/vegetable.dim.sum.jpg"],
    time: 45,
    ingredients: [
      [0, "2 tablespoons"],
      [22, "1/2"],
      [23, "2 tablespoons"],
      [7, "2 cloves"],
      [3, "1 teaspoon"],
      [24, "1 tablespoon"],
      [25, "1 lb"],
      [1, "2 teaspoons"],
      [4, "2 teaspoons"],
      [26, "15 oz"],
      [27, "8"],
      [28, "2"],
      [29, "1 cup"],
    ],
    description:
      "-- In a medium pot over medium heat, heat 1 tablespoon oil. Add onion and cook until soft, 5 minutes. Add garlic and cook until fragrant, 1 minute more. Add tomato paste and stir to coat onion and garlic. Add ground beef and cook, breaking up meat with a wooden spoon, until no longer pink, 6 minutes. Drain fat.\n\n -- Return beef to pot and season with chili powder, paprika, salt, and pepper. Add tomato sauce and kidney beans. Bring to a boil, then reduce heat and let simmer 15 minutes. Add some chili to center of each tortilla, leaving room to fold in edges. Top with Fritos, then cheddar. Fold edges of tortillas toward the center, creating pleats. Invert Crunchwraps so pleats are on the bottom and stay together.\n\n -- In medium skillet over medium heat, heat remaining tablespoon oil. Add a Crunchwrap seam side down and cook until tortilla is golden, 3 to 5 minutes per side. Repeat with remaining Crunchwraps",
  },
  {
    recipeId: 1,
    categoryId: 3,
    title: "Shiitake Fried Rice",
    photo_url:
      "https://c.ndtvimg.com/2018-10/ilrq2c5_pav-bhaji_625x300_19_October_18.jpeg",
    photosArray: [
      "https://c.ndtvimg.com/2018-10/ilrq2c5_pav-bhaji_625x300_19_October_18.jpeg",
    ],
    time: 30,
    ingredients: [
      [1, "2 tablespoons"],
      [3, "1 tablespoon"],
      [4, "1 teaspoon"],
      [5, "1/2 teaspoons"],
      [6, "1/2 teaspoons"],
      [7, "1/2 teaspoons"],
      [8, "1/2 teaspoons"],
      [9, "1/2 teaspoons"],
      [10, "1/2 teaspoons"],
      [11, "1/2 teaspoons"],
      [12, "1/2 cups"],
      [13, "1 tablespoon"],
      [14, "1 tablespoon"],
      [15, "2 breasts, 2 thighs, 2 drumsticks, 2 wings"],
      [16, "1"],
      [17, "2 quarts"],
    ],
    description:
      "-- Preheat fryer to 350°F. Thoroughly mix together all spices. Combine spices with flour, brown sugar and salt. Dip chicken pieces in egg white to lightly coat them, then transfer to flour mixture. Turn a few times and make sure the flour mix is really stuck to the chicken.\n\n -- Repeat with all the chicken pieces. Let chicken pieces rest for 5 minutes so crust has a chance to dry a bit. Fry chicken in batches. Breasts and wings should take 12-14 minutes, and legs and thighs will need a few more minutes. Chicken pieces are done when a meat thermometer inserted into the thickest part reads 165°F. Let chicken drain on a few paper towels when it comes out of the fryer. Serve hot.",
  },
  {
    recipeId: 4,
    categoryId: 1,
    title: "Baguette",
    photo_url:
      "https://attuale.ru/wp-content/uploads/2018/10/721388_1_w_1200.jpg",
    photosArray: [
      "https://attuale.ru/wp-content/uploads/2018/10/721388_1_w_1200.jpg",
    ],
    time: 35,
    ingredients: [
      [30, "jucie of 1 "],
      [24, "2 teaspoons"],
      [0, "3 tablespoons"],
      [3, "1 teaspoon"],
      [31, "1/2 teaspoons"],
      [32, "1/2 teaspoons"],
      [4, "2 teaspoons"],
      [33, "1/2 lb"],
      [27, "8"],
      [14, "2 teasponns"],
      [34, "1"],
    ],
    description:
      "Start by dissolving the yeast in warm water. While that is doing its magic, combine the flour and salt. Create a little well in the center, and add in the yeast. Stir it around, taking flour from the outside edge and bringing it into the well, a little at a time. Next add in a bit of cool water. Keep stirring, and adding water as needed, until a shaggy dough forms. Now just cover it loosely, and let it rest. For this type of bread, there’s not a lot of kneading involved. It only needs a few quick folds, to become smooth and build strength, without overworking the gluten and causing toughness. Place the dough into a greased bowl and cover it tightly. Allow it to proof (or rise) in a warm place until doubled in bulk. Divide the dough into 4 equal portions, and shape into long logs (about 15 inches long) with pointed ends. Nestle the loaves in to a floured kitchen towel, cover with oiled plastic wrap, and allow to rise a second time. While the baguettes are rising, fill a baking pan with water and place it in the bottom of your oven. Preheat the oven and allow it to fill with steam from the water. This is the KEY to a crusty baguette. Once the loaves have finished their second rise, remove the plastic wrap and sprinkle them with a little flour. Then quickly slash them with a lame, razor blade, or sharp knife. This is decorative, but it also allows the crust to crack and the bread to expand in a more controlled way. Place them in the oven and let them bake until deeply golden brown. They should feel light and dry on the outside, and when you tap them they should give a hollow sound. ",
  },
  {
    recipeId: 5,
    categoryId: 1,
    title: "Foie Gras",
    photo_url:
      "https://traveltimes.ru/wp-content/uploads/2021/12/Sheraton-Saigon_Li-Bai_Foie-Gras-delicacies-scaled-1-2048x1366.jpg",
    photosArray: [
      "https://traveltimes.ru/wp-content/uploads/2021/12/Sheraton-Saigon_Li-Bai_Foie-Gras-delicacies-scaled-1-2048x1366.jpg",
    ],
    time: 35,
    ingredients: [
      [9, "1/2 teaspoons"],
      [0, "4 tablespoons"],
      [1, "1/2 teaspoons"],
      [30, "2 tablespoons"],
      [31, "1 teaspoon"],
      [7, "1 teaspoon"],
      [24, "1/2 teaspoons"],
      [3, "1/2 teaspoons"],
      [21, "1 pound"],
      [22, "1/2 cup"],
      [27, "6"],
      [36, "4"],
      [37, "1/2"],
      [38, "1/2"],
    ],
    description:
      "-- In a large bowl, combine 2 tablespoons oil, lemon juice and seasonings; add the chicken. Turn to coat; cover. Refrigerate for 1-4 hours In a large skillet, saute peppers and onions in remaining oil until crisp-tender. Remove and keep warm. Drain chicken, discarding marinade. In the same skillet, cook chicken over medium-high heat for 5-6 minutes or until no longer pink.\n\n -- Return pepper mixture to pan; heat through. Spoon filling down the center of tortillas; fold in half. Serve with toppings as desired.",
  },
  {
    recipeId: 6,
    categoryId: 2,
    title: "Buffalo Pizza",
    photo_url:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    photosArray: [
      "https://www.tablefortwoblog.com/wp-content/uploads/2019/01/buffalo-chicken-pizza-recipe-photos-tablefortwoblog-3-500x500.jpg",
      "http://pizzachoicema.com/wp-content/uploads/2018/08/Buffalo-Chicken-Pizza.jpg",
      "https://static1.squarespace.com/static/565bb41ae4b0509ba9fdf769/t/5b9a8e80aa4a998b0be0fcf4/1536855690622/pizza.gif",
    ],
    time: 50,
    ingredients: [
      [39, "1 lb"],
      [40, "1 cup"],
      [41, "1/2 cup"],
      [42, "1/4 cup"],
      [43, "2 tablespoons"],
      [44, "1/2 cup"],
      [7, "1/4 teaspoons"],
      [5, "1/4 teaspoons"],
      [30, "1/4 teaspoons"],
      [45, "2 oz"],
      [12, "for dusting"],
      [4, "1/2 teaspoons"],
      [47, "2"],
      [46, "9 oz"],
    ],
    description:
      "-- Place a rack in upper third of oven. Place a large cast-iron skillet on rack and preheat oven to 500° (or as high as your oven will go). Place pizza dough in a large bowl, pour a little oil over, and turn to coat. Cover bowl with plastic and let dough proof at room temperature while pan and oven heat up.\n\n -- Meanwhile, cook hot sauce, marinara sauce, and butter in a medium saucepan over medium heat, stirring occasionally, until butter is melted. Stir in cream, reduce heat to low, and simmer, stirring occasionally, until slightly thickened and warmed through, about 10 minutes. Heat 1 Tbsp. oil in a large skillet over medium-high. Add chicken, toss to coat, then add ¼ cup Buffalo sauce.\n\n -- Cook chicken, tossing occasionally, until heated through, about 2 minutes. Reduce heat and simmer, stirring often, until chicken is well coated and sauce is slightly thickened, about 5 minutes. Meanwhile, whisk yogurt, lemon juice, celery salt, garlic powder, ¼ cup blue cheese, ½ tsp. pepper, and 2 Tbsp. water in a small bowl, adding more water if sauce seems too thick (it should be pourable); set aside.\n\n -- Turn out dough onto a lightly floured work surface. Shape with your hands into a round that’s slightly larger than the cast-iron skillet you’re using. Take hot skillet out of oven (watch that handle!) and place on a heatproof surface. Add a little flour to pan. Lay dough in skillet, then work edges of dough up sides of skillet with your fingertips (use a rubber spatula or wooden spoon if you’re nervous about touching the hot pan). Drizzle a little oil around inside edge of pan so that it trickles behind and underneath dough, which will encourage browning and help it release.\n\n -- Spread about ⅓ cup Buffalo sauce over dough. Arrange mozzarella over, then top with remaining ¼ cup blue cheese. Arrange chicken mixture on top. Bake pizza on top rack until crust and cheese are nicely browned, 15–20 minutes. Transfer skillet to stovetop (again, watch that handle!) and let pizza rest a few minutes. Using a spatula, slide pizza onto a cutting board or platter. Arrange celery over, then top with reserved blue cheese dressing. Season with pepper, then drizzle with oil.",
  },
  {
    recipeId: 0,
    categoryId: 0,
    title: "Samosa",
    photo_url:
      "https://www.cubesnjuliennes.com/wp-content/uploads/2020/08/Best-Mutton-Keema-Samosa-2.jpg",
    photosArray: [
      "https://www.cubesnjuliennes.com/wp-content/uploads/2020/08/Best-Mutton-Keema-Samosa-2.jpg",
    ],
    time: 15,
    ingredients: [
      [0, "200ml"],
      [1, "5g"],
      [2, "300g"],
    ],
    description:
      "step-1 Boil green peas and potatoes in salted water in a pressure cooker until soft. After boiling, transfer them to a colander to remove excess water. Peel the potatoes and lightly mash them or finely chop them. step-2 While potatoes are boiling, let’s make a dough for crispy outer layer. Take maida, carom seeds, 3 tablespoons ghee (or oil) and salt in a wide mouthed bowl. step-3 Mix all the ingredients properly with hand. You will notice the mixture will turn crumbly after mixing. Now, add water in multiple small quantities and knead firm dough (harder than paratha dough). Cover it with wet muslin cloth/any cloth and let it set for 15-20 minutes. step-4 When the dough is setting, let’s start to make stuffing for samosa. Heat 2 tablespoons cooking oil in kadai over medium flame. Add cumin seeds and green-chilli-ginger paste. Stir and cook for a minute. step-5 Add boiled green peas and stir-fry for a minute. Add red chilli powder, coriander powder, garam masala powder, dry mango powder and fennel seeds powder. step-6 Stir fry for a minute. step-7 Add chopped/mashed potato and salt (add salt only if you have not added while boiling potatoes or taste the potato and then add according it). step-8 Mix them properly and cook for 2-3 minutes. Add coriander leaves, mint leaves and mix well. step-9 Turn off the flame and transfer stuffing mixture to a bowl. Let it cool for a while at room temperature. step-10 After 15-20 minutes, remove the wet cloth and knead the dough again until smooth. Divide it into 6 small portions and make round shaped balls from it. step-11 Take one dough ball and press it between your palms to flatten it a little. Put it over rolling board and roll it out into round shaped puri having approx 5-6 inch diameter. Cut it into two semi-circles. step-12 Spread water with the wet finger or a brush on the cut side edge (straight side – as shown in photo) to moisten the surface. step-13 Take one semi-circle and give it a shape of cone by folding it from both sides (overlapping one side over another) and pressing them to seal the sides. step-14 Put one mutter (pea) at the bottom of the cone to keep its shape. step-15 Put 2-3 tablespoons filling in the cone. Do not over fill the stuffing otherwise, you will not be able to seal the edges properly in next step. step-16 Wet the edges with moist finger or a brush and press it tightly with your thumb and index finger to seal them. Make all remaining samosas in same way. step-17 For deep frying, heat oil in a heavy based kadai (pan) over medium flame. When oil is medium hot, add 2-3 samosa (depending on the size of a pan) in it and reduce flame to low. Do not over crowd the oil to cook them evenly. step-18 If you want to prepare them in advance for guest then remove the samosa when they start to turn light brown and deep fry them again at the time of serving. Skip this step if you do not want to double-fry (two times frying) the samosa. step-19 Deep fry them on low to medium flame until they turn golden brown. Transfer fried samosas to a plate and serve with green chutney and tomato ketchup.",
  },
  {
    recipeId: 7,
    categoryId: 2,
    title: "Spaghetti Carbonara",
    photo_url:
      "https://truffle-assets.imgix.net/655ce202-862-butternutsquashcarbonara-land.jpg",
    photosArray: [
      "https://ak3.picdn.net/shutterstock/videos/10431533/thumb/10.jpg",
      "https://www.kcet.org/sites/kl/files/styles/kl_image_large/public/thumbnails/image/square_hero_desktop_2x_sfs_spaghetti_carbonara_clr-3.jpg?itok=T-rsBDIZ",
      "https://cdn-image.foodandwine.com/sites/default/files/HD-201104-r-spaghetti-with-anchovy.jpg",
    ],
    time: 15,
    ingredients: [
      [48, "50g"],
      [49, "100g"],
      [50, "350g"],
      [51, "2 plump"],
      [42, "50g"],
      [16, "3"],
      [1, "2 teaspoons"],
      [4, "2 teaspoons"],
    ],
    description:
      "-- Put the egg yolks into a bowl, finely grate in the Parmesan, season with pepper, then mix well with a fork and put to one side. Cut any hard skin off the pancetta and set aside, then chop the meat. Cook the spaghetti in a large pan of boiling salted water until al dente.\n\n -- Meanwhile, rub the pancetta skin, if you have any, all over the base of a medium frying pan (this will add fantastic flavour, or use 1 tablespoon of oil instead), then place over a medium-high heat. Peel the garlic, then crush with the palm of your hand, add it to the pan and leave it to flavour the fat for 1 minute. Stir in the pancetta, then cook for 4 minutes, or until it starts to crisp up. Pick out and discard the garlic from the pan, then, reserving some of the cooking water, drain and add the spaghetti.\n\n -- Toss well over the heat so it really soaks up all that lovely flavour, then remove the pan from the heat. Add a splash of the cooking water and toss well, season with pepper, then pour in the egg mixture – the pan will help to cook the egg gently, rather than scrambling it. Toss well, adding more cooking water until it’s lovely and glossy. Serve with a grating of Parmesan and an extra twist of pepper.",
  },
  {
    recipeId: 8,
    categoryId: 2,
    title: "Lazania",
    photo_url: "https://images8.alphacoders.com/817/817353.jpg",
    photosArray: [
      "https://previews.123rf.com/images/somegirl/somegirl1509/somegirl150900048/46103208-top-view-of-a-delicious-traditional-italian-lasagna-made-with-minced-beef-bolognese-sauce-topped-wit.jpg",
      "https://truffle-assets.imgix.net/87f324e4-YOUTUBE-NO-TXT.00_03_19_14.Imagen_fija001.jpg",
      "https://images4.alphacoders.com/817/817350.jpg",
    ],
    time: 60,
    ingredients: [
      [36, "1 large"],
      [25, "1 pound"],
      [51, "5 cloves"],
      [52, "1 pound"],
      [53, "1 pound"],
      [54, "1 28 ounce can"],
      [23, "2 6 ounce can"],
      [55, "2 tablespoons"],
      [56, "1/4 cup"],
      [10, "1/2 cup"],
      [1, "1/2 teaspoons"],
      [58, "1 teaspoon"],
      [4, "1/4 teaspoons"],
      [16, "1 large"],
      [46, "1 pound"],
      [48, "1 cup"],
      [57, "30 ounces"],
    ],
    description:
      "-- Cook noodles according to package directions; drain. Meanwhile, in a Dutch oven, cook sausage, beef and onion over medium heat 8-10 minutes or until meat is no longer pink, breaking up meat into crumbles. Add garlic; cook 1 minute. Drain. Stir in tomatoes, tomato paste, water, sugar, 3 tablespoons parsley, basil, fennel, 1/2 teaspoon salt and pepper; bring to a boil. Reduce heat; simmer, uncovered, 30 minutes, stirring occasionally. In a small bowl, mix egg, ricotta cheese, and remaining parsley and salt. Preheat oven to 375°. Spread 2 cups meat sauce into an ungreased 13x9-in. baking dish. Layer with 3 noodles and a third of the ricotta mixture. Sprinkle with 1 cup mozzarella cheese and 2 tablespoons Parmesan cheese.\n\n -- Repeat layers twice. Top with remaining meat sauce and cheeses (dish will be full). Bake, covered, 25 minutes. Bake, uncovered, 25 minutes longer or until bubbly. Let stand 15 minutes before serving.",
  },
];

export const ingredients = [
  {
    ingredientId: 0,
    name: "Oil",
    photo_url:
      "https://ak7.picdn.net/shutterstock/videos/27252067/thumb/11.jpg",
  },
  {
    ingredientId: 1,
    name: "Salt",
    photo_url:
      "https://image.freepik.com/free-photo/sea-salt-wooden-bowl-isolated-white-background_29402-416.jpg",
  },
  {
    ingredientId: 2,
    name: "Russet potatoes",
    photo_url:
      "http://www.valleyspuds.com/wp-content/uploads/Russet-Potatoes-cut.jpg",
  },
  {
    ingredientId: 3,
    name: "Paprika",
    photo_url:
      "https://image.freepik.com/free-photo/red-chilli-pepper-powder-isolated-white-background_55610-28.jpg",
  },
  {
    ingredientId: 4,
    name: "Black Pepper",
    photo_url: "https://ak0.picdn.net/shutterstock/videos/26741680/thumb/1.jpg",
  },
  {
    ingredientId: 5,
    name: "Celery salt",
    photo_url:
      "https://www.hasiroglugurme.com/images/urunler/Koftelik-Esmer-Bulgur-resim-297.jpg",
  },
  {
    ingredientId: 6,
    name: "Shrimp",
    photo_url:
      "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/can-you-eat-raw-shrimp-1296x728-feature.jpg?w=1845",
  },
  {
    ingredientId: 7,
    name: "Garlic powder",
    photo_url:
      "https://us.123rf.com/450wm/belchonock/belchonock1808/belchonock180818180/106007144-bowl-of-dry-garlic-powder-on-white-background.jpg?ver=6",
  },
  {
    ingredientId: 8,
    name: "Ground allspice",
    photo_url:
      "https://www.savoryspiceshop.com/content/mercury_modules/cart/items/2/6/9/2695/allspice-berries-jamaican-ground-1.jpg",
  },
  {
    ingredientId: 9,
    name: "Dried oregano",
    photo_url: "https://frutascharito.es/886-large_default/oregano.jpg",
  },
  {
    ingredientId: 10,
    name: "Dried basil",
    photo_url:
      "https://www.honeychop.com/wp-content/uploads/2015/09/Dried-Mint.png",
  },
  {
    ingredientId: 11,
    name: "Dried marjoram",
    photo_url:
      "https://images-na.ssl-images-amazon.com/images/I/71YATIBqBYL._SX355_.jpg",
  },
  {
    ingredientId: 12,
    name: "All-purpose flour",
    photo_url:
      "https://images.assetsdelivery.com/compings_v2/seregam/seregam1309/seregam130900036.jpg",
  },
  {
    ingredientId: 13,
    name: "Rice",
    photo_url:
      "https://www.simplyrecipes.com/thmb/sfMQooiezhd0iH-KrzWTTk2Kfl8=/648x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2020__02__HTC-White-Rice-Lead-3-5073a46b67124ca8b405143cd373da0c.jpg",
  },
  {
    ingredientId: 14,
    name: "Kosher salt",
    photo_url:
      "https://d1yn1kh78jj1rr.cloudfront.net/image/preview/r64-6MxPQjlatyfjp/storyblocks-top-view-of-ceramic-salt-cellar-with-coarse-grained-sea-salt-isolated-on-white-background_SPzKionPuV_SB_PM.jpg",
  },
  {
    ingredientId: 15,
    name: "Whole chicken",
    photo_url:
      "https://image.shutterstock.com/image-photo/two-raw-chicken-drumsticks-isolated-260nw-632125991.jpg",
  },
  {
    ingredientId: 16,
    name: "Eggs",
    photo_url:
      "https://image.shutterstock.com/image-photo/egg-whites-yolk-cup-isolated-260nw-1072453787.jpg",
  },
  {
    ingredientId: 17,
    name: "Quarts neutral oil",
    photo_url:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fgettyimages-464433694_0.jpg%3Fitok%3DK42YR2GV&w=400&c=sc&poi=face&q=85",
  },
  {
    ingredientId: 18,
    name: "Water",
    photo_url: "https://ak1.picdn.net/shutterstock/videos/829561/thumb/11.jpg",
  },
  {
    ingredientId: 19,
    name: "Onion Powder",
    photo_url:
      "https://image.shutterstock.com/image-photo/mixed-spices-isolated-on-white-260nw-662383828.jpg",
  },
  {
    ingredientId: 20,
    name: "MSG",
    photo_url:
      "https://img.freepik.com/free-photo/monosodium-glutamate-wood-spoon-white-background_55883-399.jpg?size=626&ext=jpg",
  },
  {
    ingredientId: 21,
    name: "Chicken Breast",
    photo_url:
      "https://us.123rf.com/450wm/utima/utima1602/utima160200063/53405187-raw-chicken-breast-fillets.jpg?ver=6",
  },
  {
    ingredientId: 22,
    name: "Onion chopped",
    photo_url: "https://s3.envato.com/files/246703499/IMG_1752_5.jpg",
  },
  {
    ingredientId: 23,
    name: "Tomato paste",
    photo_url:
      "http://d3e1m60ptf1oym.cloudfront.net/45bab59a-363c-11e1-ab4e-bf4c2e0bb026/PANELA_xgaplus.jpg",
  },
  {
    ingredientId: 24,
    name: "Chilli Powder",
    photo_url:
      "https://us.123rf.com/450wm/nuttapong/nuttapong1505/nuttapong150500009/40458002-paprika-powder-isolated-on-white-background.jpg?ver=6",
  },
  {
    ingredientId: 25,
    name: "Ground Beef",
    photo_url:
      "https://images.radio.com/kmoxam/s3fs-public/styles/nts_image_cover_tall_775x425/public/dreamstime_s_39607998.jpg?XCM.w1UGOp9sVKkWGQZe7_JIsRddxoIK&itok=3M6KcFLH&c=73fb6497175b4c1a5c79e3ede816656a",
  },
  {
    ingredientId: 26,
    name: "Can kidney beans, rinsed and drained ",
    photo_url:
      "https://www.seriouseats.com/images/2014/04/20140414-pile-of-beans-primary-1500x1125.jpg",
  },
  {
    ingredientId: 27,
    name: "Large Tortillas",
    photo_url:
      "https://upload.wikimedia.org/wikipedia/commons/5/56/NCI_flour_tortillas.jpg",
  },
  {
    ingredientId: 28,
    name: "Firtos",
    photo_url:
      "https://previews.123rf.com/images/ksena32/ksena321510/ksena32151000090/45863494-fried-fish-on-a-white-background.jpg",
  },
  {
    ingredientId: 29,
    name: "Shredded cheddar",
    photo_url:
      "https://image.shutterstock.com/image-photo/top-view-small-bowl-filled-260nw-284460308.jpg",
  },
  {
    ingredientId: 30,
    name: "Lime",
    photo_url: "https://ak8.picdn.net/shutterstock/videos/23271748/thumb/1.jpg",
  },

  {
    ingredientId: 31,
    name: "Ground cumin",
    photo_url:
      "https://image.shutterstock.com/image-photo/pile-cumin-powder-isolated-on-260nw-1193262853.jpg",
  },
  {
    ingredientId: 32,
    name: "Cayenne pepper",
    photo_url: "https://ak7.picdn.net/shutterstock/videos/11461337/thumb/1.jpg",
  },
  {
    ingredientId: 33,
    name: "Flaky white fish",
    photo_url:
      "https://image.shutterstock.com/image-photo/roach-river-fish-isolated-on-260nw-277764143.jpg",
  },
  {
    ingredientId: 34,
    name: "Avocado",
    photo_url:
      "https://www.redwallpapers.com/public/redwallpapers-large-thumb/avocado-cut-stone-leaves-white-background-free-stock-photos-images-hd-wallpaper.jpg",
  },
  {
    ingredientId: 35,
    name: "Red Pepper Flakes",
    photo_url:
      "https://as1.ftcdn.net/jpg/02/06/55/10/500_F_206551074_mVczUrAWOSMaw8kR48FQDQBqDw47jCtL.jpg",
  },
  {
    ingredientId: 36,
    name: "Onions",
    photo_url: "http://www.allwhitebackground.com/images/2/2650.jpg",
  },
  {
    ingredientId: 37,
    name: "Green Pepper",
    photo_url: "https://ak9.picdn.net/shutterstock/videos/4055509/thumb/1.jpg",
  },
  {
    ingredientId: 38,
    name: "Red Pepper",
    photo_url: "https://ak9.picdn.net/shutterstock/videos/10314179/thumb/1.jpg",
  },
  {
    ingredientId: 39,
    name: "Pizza dough",
    photo_url:
      "https://image.shutterstock.com/image-photo/fresh-raw-dough-pizza-bread-260nw-518950903.jpg",
  },
  {
    ingredientId: 40,
    name: "Ketchup sauce",
    photo_url:
      "https://st2.depositphotos.com/5262887/11050/i/950/depositphotos_110501208-stock-photo-ketchup-bowl-isolated-on-white.jpg",
  },
  {
    ingredientId: 41,
    name: "Hot Sauce",
    photo_url:
      "https://media.istockphoto.com/photos/opened-can-of-spaghetti-sauce-on-a-white-background-picture-id497704752?k=6&m=497704752&s=612x612&w=0&h=JnL54buYu1Z3fGtd8uNdjFxiAKwlxoDluD6jbIfSaZI=",
  },
  {
    ingredientId: 42,
    name: "Butter",
    photo_url:
      "https://redrockstoffee.com/media/2016/11/AdobeStock_76417550.jpeg",
  },
  {
    ingredientId: 43,
    name: "Heavy Cream",
    photo_url:
      "https://media.istockphoto.com/photos/mayonnaise-in-bowl-isolated-on-white-background-picture-id614981116?k=6&m=614981116&s=612x612&w=0&h=LtbsI2HQXOTERYuP9YJ2PJfRF3W6DcyZ798fxMcQWC0=",
  },
  {
    ingredientId: 44,
    name: "whole-milk plain yogurt",
    photo_url:
      "https://st.depositphotos.com/2757384/3317/i/950/depositphotos_33170129-stock-photo-pouring-a-glass-of-milk.jpg",
  },
  {
    ingredientId: 45,
    name: "Chesse",
    photo_url: "https://ak7.picdn.net/shutterstock/videos/3619997/thumb/1.jpg",
  },
  {
    ingredientId: 46,
    name: "Mozzarella",
    photo_url:
      "https://t3.ftcdn.net/jpg/02/06/73/98/500_F_206739841_suPu6qDPHlowFqx9qo8fLqV8sNevL2g3.jpg",
  },
  {
    ingredientId: 47,
    name: "celery stalks",
    photo_url:
      "https://cdn4.eyeem.com/thumb/6d1b3957c7caa9b73c3e0f820ef854b931808139-1538043742765/w/750",
  },
  {
    ingredientId: 48,
    name: "Parmesan Chesse",
    photo_url: "https://ak7.picdn.net/shutterstock/videos/3721877/thumb/1.jpg",
  },
  {
    ingredientId: 49,
    name: "pancetta",
    photo_url:
      "https://previews.123rf.com/images/onlyfabrizio/onlyfabrizio1606/onlyfabrizio160600002/60198502-raw-stripes-of-pancetta-stesa-on-a-white-background.jpg",
  },
  {
    ingredientId: 50,
    name: "Spaghetti",
    photo_url:
      "https://previews.123rf.com/images/mfron/mfron1204/mfron120400098/13306773-bunch-of-spaghetti-nudeln-isoliert-auf-wei%C3%9Fem-hintergrund.jpg",
  },
  {
    ingredientId: 51,
    name: "Garlic",
    photo_url:
      "https://image.freepik.com/free-photo/fresh-garlic-white-background_1339-17012.jpg",
  },
  {
    ingredientId: 52,
    name: "Lasagna noodles",
    photo_url:
      "https://previews.123rf.com/images/velkol/velkol1110/velkol111000004/11083085-an-image-of-raw-lasagna-on-white-background.jpg",
  },
  {
    ingredientId: 53,
    name: "Italian sauce",
    photo_url:
      "https://previews.123rf.com/images/arinahabich/arinahabich1504/arinahabich150400858/38827029-raw-italian-sausage-on-a-white-background-.jpg",
  },
  {
    ingredientId: 54,
    name: "Crushed Tomatoes",
    photo_url:
      "https://previews.123rf.com/images/merkulovnik/merkulovnik1406/merkulovnik140600100/28751626-crushed-tomato-isolated-on-white-background.jpg",
  },
  {
    ingredientId: 55,
    name: "Sugar",
    photo_url:
      "https://previews.123rf.com/images/sommai/sommai1411/sommai141100034/33199985-sugar-cubes-in-a-bowl-isolated-on-white-background.jpg",
  },
  {
    ingredientId: 56,
    name: "minced fresh parsley",
    photo_url:
      "https://t4.ftcdn.net/jpg/02/15/78/05/240_F_215780551_Eid0xpP1M2fokvuEcvJj8uqhROLJkb3p.jpg",
  },
  {
    ingredientId: 57,
    name: "ricotta cheese",
    photo_url:
      "https://previews.123rf.com/images/barkstudio/barkstudio1608/barkstudio160800351/61418602-ricotta-cheese-into-a-bowl-in-white-background.jpg",
  },
  {
    ingredientId: 58,
    name: " fennel seed",
    photo_url:
      "https://previews.123rf.com/images/pinkomelet/pinkomelet1710/pinkomelet171000227/88851299-close-up-the-fennel-seed-on-white-background.jpg",
  },
  {
    ingredientId: 59,
    name: "Banana",
    photo_url:
      "https://www.conservationmagazine.org/wp-content/uploads/2013/04/sterile-banana.jpg",
  },
  {
    ingredientId: 60,
    name: "Frozen Straberries",
    photo_url:
      "https://www.cascadianfarm.com/wp-content/uploads/2018/12/Strawberries_Main_0218.png",
  },
  {
    ingredientId: 61,
    name: "Greek Yogurt",
    photo_url:
      "http://images.media-allrecipes.com/userphotos/960x960/3758635.jpg",
  },
];
