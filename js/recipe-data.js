const recipeData = {
    "healthy-snacks": {
        'yogurt-parfait': {
            title: 'Greek Yogurt Berry Parfait',
            category: 'High Protein',
            shortDescription: 'A protein-rich parfait layered with fresh berries, honey, and crunchy granola.',
            prepTime: '5 mins',
            calories: 250,
            protein: '15g',
            image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&auto=format&fit=crop',
            ingredients: [
                '1 cup plain Greek yogurt (2% or full-fat)',
                '1/2 cup mixed fresh berries (strawberries, blueberries, raspberries)',
                '1/4 cup low-fat granola',
                '1 tablespoon honey or maple syrup',
                '1/4 teaspoon vanilla extract (optional)',
                '1 tablespoon chia seeds (optional)'
            ],
            instructions: [
                'In a serving glass, start with 1/3 of the Greek yogurt as the bottom layer',
                'Add a layer of mixed berries (about 2-3 tablespoons)',
                'Sprinkle 1-2 tablespoons of granola',
                'Repeat layers until all ingredients are used',
                'Drizzle with honey or maple syrup',
                'Top with remaining berries and chia seeds if using'
            ],
            nutrition: {
                calories: 250,
                protein: '15g',
                carbs: '32g',
                fiber: '4g',
                fat: '8g',
                sugar: '20g'
            }
        },
        'energy-balls': {
            title: 'Almond Date Energy Balls',
            category: 'Energy Boost',
            shortDescription: 'No-bake energy balls made with Medjool dates, almonds, and dark chocolate chips.',
            prepTime: '15 mins',
            calories: 120,
            protein: '3g',
            image: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=800&auto=format&fit=crop',
            ingredients: [
                '1 cup Medjool dates, pitted (about 10-12 dates)',
                '1 cup raw almonds',
                '1/4 cup dark chocolate chips',
                '1 tablespoon cocoa powder',
                '1 tablespoon coconut oil',
                '1/4 teaspoon sea salt',
                '1/4 cup shredded coconut (for rolling)'
            ],
            instructions: [
                'Place almonds in a food processor and pulse until finely chopped',
                'Add dates, cocoa powder, and salt. Process until well combined',
                'Add melted coconut oil and chocolate chips, pulse briefly',
                'Roll mixture into 1-inch balls',
                'Roll balls in shredded coconut if desired',
                'Refrigerate for at least 30 minutes before serving'
            ],
            nutrition: {
                calories: 120,
                protein: '3g',
                carbs: '15g',
                fiber: '2g',
                fat: '7g',
                sugar: '12g'
            }
        },
        'avocado-toast': {
            title: 'Everything Bagel Avocado Toast',
            category: 'Heart Healthy',
            shortDescription: 'Creamy mashed avocado on whole grain toast with everything bagel seasoning.',
            prepTime: '10 mins',
            calories: 220,
            protein: '6g',
            image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=800&auto=format&fit=crop',
            ingredients: [
                '2 slices whole grain bread',
                '1 ripe avocado',
                '1 tablespoon everything bagel seasoning',
                '6-8 cherry tomatoes, halved',
                'Handful of microgreens',
                '1/4 lemon, juiced',
                'Salt and pepper to taste'
            ],
            instructions: [
                'Toast the bread slices until golden brown',
                'Mash the avocado with lemon juice, salt, and pepper',
                'Spread mashed avocado evenly on toast slices',
                'Top with halved cherry tomatoes',
                'Sprinkle everything bagel seasoning',
                'Add microgreens on top'
            ],
            nutrition: {
                calories: 220,
                protein: '6g',
                carbs: '22g',
                fiber: '8g',
                fat: '14g',
                sugar: '2g'
            }
        },
        'chickpeas': {
            title: 'Spiced Roasted Chickpeas',
            category: 'Crunchy',
            shortDescription: 'Crispy roasted chickpeas seasoned with cumin, paprika, and garlic powder.',
            prepTime: '35 mins',
            calories: 180,
            protein: '7g',
            image: 'https://images.unsplash.com/photo-1612251017916-3924f1fd9220?w=800&auto=format&fit=crop',
            ingredients: [
                '2 (15 oz) cans chickpeas, drained and rinsed',
                '2 tablespoons olive oil',
                '1 teaspoon cumin',
                '1 teaspoon paprika',
                '1/2 teaspoon garlic powder',
                '1/2 teaspoon onion powder',
                '1 teaspoon sea salt'
            ],
            instructions: [
                'Preheat oven to 400°F (200°C)',
                'Thoroughly dry chickpeas with paper towels',
                'Mix all spices in a small bowl',
                'Toss chickpeas with olive oil and spice mixture',
                'Spread on baking sheet in single layer',
                'Roast for 30-35 minutes, shaking pan halfway',
                'Let cool for 5-10 minutes to crisp up'
            ],
            nutrition: {
                calories: 180,
                protein: '7g',
                carbs: '22g',
                fiber: '6g',
                fat: '8g',
                sugar: '0g'
            }
        },
        'apple-chips': {
            title: 'Cinnamon Apple Chips',
            category: 'Sugar-Free',
            shortDescription: 'Thinly sliced apples dusted with cinnamon and slowly baked until crispy.',
            prepTime: '2 hours',
            calories: 95,
            protein: '0.5g',
            image: 'https://images.unsplash.com/photo-1633478062482-790e3b5dd810?w=800&auto=format&fit=crop',
            ingredients: [
                '3 large apples (Honeycrisp or Fuji recommended)',
                '1 1/2 teaspoons ground cinnamon',
                '1/4 teaspoon nutmeg (optional)',
                'Pinch of salt'
            ],
            instructions: [
                'Preheat oven to 225°F (107°C)',
                'Wash and core apples',
                'Using a mandoline or sharp knife, slice apples very thinly (1/8 inch)',
                'Mix cinnamon, nutmeg, and salt in a small bowl',
                'Arrange slices on lined baking sheets, not overlapping',
                'Sprinkle with cinnamon mixture',
                'Bake for 1.5-2 hours, flipping halfway',
                'Let cool completely to crisp up'
            ],
            nutrition: {
                calories: 95,
                protein: '0.5g',
                carbs: '25g',
                fiber: '4g',
                fat: '0g',
                sugar: '19g'
            }
        }
    },
    "easy-stomach": {
        "banana-oatmeal": {
            title: "Banana Oatmeal",
            category: "Easy on Stomach",
            image: "https://images.unsplash.com/photo-1583778176476-4a8b02a64c01",
            shortDescription: "Creamy oatmeal with ripe bananas and a touch of honey",
            prepTime: "10 minutes",
            calories: 180,
            servings: 1,
            ingredients: [
                "1/2 cup rolled oats",
                "1 ripe banana, mashed",
                "1 cup water or milk",
                "1 tsp honey (optional)",
                "Pinch of salt"
            ],
            instructions: [
                "Combine oats, water/milk, and salt in a pot",
                "Bring to a simmer over medium heat",
                "Add mashed banana and stir occasionally",
                "Cook for 5-7 minutes until creamy",
                "Add honey if desired and serve warm"
            ]
        },
        "rice-pudding": {
            title: "Rice Pudding",
            category: "Easy on Stomach",
            image: "https://images.unsplash.com/photo-1630343710506-89f8b9f21d31",
            shortDescription: "Smooth and comforting rice pudding with cinnamon",
            prepTime: "25 minutes",
            calories: 220,
            servings: 2,
            ingredients: [
                "1 cup cooked white rice",
                "2 cups milk",
                "2 tbsp sugar",
                "1/2 tsp vanilla extract",
                "1/4 tsp cinnamon",
                "Pinch of salt"
            ],
            instructions: [
                "Combine rice, milk, and salt in a pot",
                "Simmer on low heat, stirring occasionally",
                "Add sugar and vanilla after 15 minutes",
                "Cook until creamy (about 20-25 minutes)",
                "Sprinkle with cinnamon and serve warm"
            ]
        },
        "yogurt-parfait": {
            title: "Yogurt Parfait",
            category: "Easy on Stomach",
            image: "https://images.unsplash.com/photo-1488477181946-6428a0291777",
            shortDescription: "Layered yogurt with honey and soft fruits",
            prepTime: "5 minutes",
            calories: 150,
            servings: 1,
            ingredients: [
                "1 cup plain yogurt",
                "1 ripe banana, sliced",
                "2 tbsp honey",
                "1/4 cup soft berries",
                "2 tbsp granola (optional)"
            ],
            instructions: [
                "Layer yogurt in a glass or bowl",
                "Add sliced banana and berries",
                "Drizzle with honey",
                "Top with granola if using",
                "Serve immediately"
            ]
        },
        "applesauce": {
            title: "Homemade Applesauce",
            category: "Easy on Stomach",
            image: "https://images.unsplash.com/photo-1568909344668-6f14a07b56a0",
            shortDescription: "Smooth and naturally sweet applesauce",
            prepTime: "20 minutes",
            calories: 100,
            servings: 4,
            ingredients: [
                "4 apples, peeled and chopped",
                "1/4 cup water",
                "2 tbsp honey (optional)",
                "1/4 tsp cinnamon",
                "Pinch of salt"
            ],
            instructions: [
                "Combine apples, water, and salt in a pot",
                "Simmer covered for 15-20 minutes",
                "Mash apples until smooth",
                "Add honey and cinnamon if desired",
                "Serve warm or chilled"
            ]
        }
    }
};

// Export the recipe data
if (typeof module !== 'undefined' && module.exports) {
    module.exports = recipeData;
const healthySnackRecipes = {
    'yogurt-parfait': {
        title: 'Greek Yogurt Berry Parfait',
        category: 'High Protein',
        shortDescription: 'A protein-rich parfait layered with fresh berries, honey, and crunchy granola.',
        prepTime: '5 mins',
        calories: 250,
        protein: '15g',
        image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&auto=format&fit=crop',
        ingredients: [
            '1 cup plain Greek yogurt (2% or full-fat)',
            '1/2 cup mixed fresh berries (strawberries, blueberries, raspberries)',
            '1/4 cup low-fat granola',
            '1 tablespoon honey or maple syrup',
            '1/4 teaspoon vanilla extract (optional)',
            '1 tablespoon chia seeds (optional)'
        ],
        instructions: [
            'In a serving glass, start with 1/3 of the Greek yogurt as the bottom layer',
            'Add a layer of mixed berries (about 2-3 tablespoons)',
            'Sprinkle 1-2 tablespoons of granola',
            'Repeat layers until all ingredients are used',
            'Drizzle with honey or maple syrup',
            'Top with remaining berries and chia seeds if using'
        ],
        nutrition: {
            calories: 250,
            protein: '15g',
            carbs: '32g',
            fiber: '4g',
            fat: '8g',
            sugar: '20g'
        }
    },
    'energy-balls': {
        title: 'Almond Date Energy Balls',
        category: 'Energy Boost',
        shortDescription: 'No-bake energy balls made with Medjool dates, almonds, and dark chocolate chips.',
        prepTime: '15 mins',
        calories: 120,
        protein: '3g',
        image: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=800&auto=format&fit=crop',
        ingredients: [
            '1 cup Medjool dates, pitted (about 10-12 dates)',
            '1 cup raw almonds',
            '1/4 cup dark chocolate chips',
            '1 tablespoon cocoa powder',
            '1 tablespoon coconut oil',
            '1/4 teaspoon sea salt',
            '1/4 cup shredded coconut (for rolling)'
        ],
        instructions: [
            'Place almonds in a food processor and pulse until finely chopped',
            'Add dates, cocoa powder, and salt. Process until well combined',
            'Add melted coconut oil and chocolate chips, pulse briefly',
            'Roll mixture into 1-inch balls',
            'Roll balls in shredded coconut if desired',
            'Refrigerate for at least 30 minutes before serving'
        ],
        nutrition: {
            calories: 120,
            protein: '3g',
            carbs: '15g',
            fiber: '2g',
            fat: '7g',
            sugar: '12g'
        }
    },
    'avocado-toast': {
        title: 'Everything Bagel Avocado Toast',
        category: 'Heart Healthy',
        shortDescription: 'Creamy mashed avocado on whole grain toast with everything bagel seasoning.',
        prepTime: '10 mins',
        calories: 220,
        protein: '6g',
        image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=800&auto=format&fit=crop',
        ingredients: [
            '2 slices whole grain bread',
            '1 ripe avocado',
            '1 tablespoon everything bagel seasoning',
            '6-8 cherry tomatoes, halved',
            'Handful of microgreens',
            '1/4 lemon, juiced',
            'Salt and pepper to taste'
        ],
        instructions: [
            'Toast the bread slices until golden brown',
            'Mash the avocado with lemon juice, salt, and pepper',
            'Spread mashed avocado evenly on toast slices',
            'Top with halved cherry tomatoes',
            'Sprinkle everything bagel seasoning',
            'Add microgreens on top'
        ],
        nutrition: {
            calories: 220,
            protein: '6g',
            carbs: '22g',
            fiber: '8g',
            fat: '14g',
            sugar: '2g'
        }
    },
    'chickpeas': {
        title: 'Spiced Roasted Chickpeas',
        category: 'Crunchy',
        shortDescription: 'Crispy roasted chickpeas seasoned with cumin, paprika, and garlic powder.',
        prepTime: '35 mins',
        calories: 180,
        protein: '7g',
        image: 'https://images.unsplash.com/photo-1612251017916-3924f1fd9220?w=800&auto=format&fit=crop',
        ingredients: [
            '2 (15 oz) cans chickpeas, drained and rinsed',
            '2 tablespoons olive oil',
            '1 teaspoon cumin',
            '1 teaspoon paprika',
            '1/2 teaspoon garlic powder',
            '1/2 teaspoon onion powder',
            '1 teaspoon sea salt'
        ],
        instructions: [
            'Preheat oven to 400°F (200°C)',
            'Thoroughly dry chickpeas with paper towels',
            'Mix all spices in a small bowl',
            'Toss chickpeas with olive oil and spice mixture',
            'Spread on baking sheet in single layer',
            'Roast for 30-35 minutes, shaking pan halfway',
            'Let cool for 5-10 minutes to crisp up'
        ],
        nutrition: {
            calories: 180,
            protein: '7g',
            carbs: '22g',
            fiber: '6g',
            fat: '8g',
            sugar: '0g'
        }
    },
    'apple-chips': {
        title: 'Cinnamon Apple Chips',
        category: 'Sugar-Free',
        shortDescription: 'Thinly sliced apples dusted with cinnamon and slowly baked until crispy.',
        prepTime: '2 hours',
        calories: 95,
        protein: '0.5g',
        image: 'https://images.unsplash.com/photo-1633478062482-790e3b5dd810?w=800&auto=format&fit=crop',
        ingredients: [
            '3 large apples (Honeycrisp or Fuji recommended)',
            '1 1/2 teaspoons ground cinnamon',
            '1/4 teaspoon nutmeg (optional)',
            'Pinch of salt'
        ],
        instructions: [
            'Preheat oven to 225°F (107°C)',
            'Wash and core apples',
            'Using a mandoline or sharp knife, slice apples very thinly (1/8 inch)',
            'Mix cinnamon, nutmeg, and salt in a small bowl',
            'Arrange slices on lined baking sheets, not overlapping',
            'Sprinkle with cinnamon mixture',
            'Bake for 1.5-2 hours, flipping halfway',
            'Let cool completely to crisp up'
        ],
        nutrition: {
            calories: 95,
            protein: '0.5g',
            carbs: '25g',
            fiber: '4g',
            fat: '0g',
            sugar: '19g'
        }
    }
};
}
