// Recipe data
const easyOnStomachRecipes = [
    {
        id: 'banana-oatmeal',
        title: 'Banana Oatmeal',
        image: 'https://images.unsplash.com/photo-1583778176476-4a8b02a64c01?w=800&auto=format&fit=crop',
        description: 'A warm, comforting bowl of oatmeal with ripe bananas - perfect for sensitive stomachs.',
        prepTime: '10 mins',
        servings: '1 serving',
        calories: '310 cal',
        category: 'Easy to Digest',
        tags: ['Breakfast', 'Easy to Digest'],
        ingredients: [
            '1 cup rolled oats',
            '1 ripe banana, mashed',
            '2 cups water',
            'Pinch of salt',
            'Honey (optional)'
        ],
        instructions: [
            'In a pot, bring water to a boil.',
            'Add rolled oats and reduce heat to medium-low.',
            'Cook for 5 minutes, stirring occasionally.',
            'Mash the banana and add it to the oatmeal.',
            'Cook for another 2-3 minutes until desired consistency.',
            'Add a pinch of salt and honey if desired.'
        ]
    },
    {
        id: 'rice-vegetables',
        title: 'Rice and Steamed Vegetables',
        image: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=800&auto=format&fit=crop',
        description: 'Light and easily digestible steamed vegetables with white rice.',
        prepTime: '20 mins',
        servings: '2 servings',
        calories: '220 cal',
        category: 'Light Meal',
        tags: ['Light Meal', 'Vegetarian'],
        ingredients: [
            '1 cup white rice',
            '2 carrots, sliced',
            '1 cup broccoli florets',
            '1 zucchini, sliced',
            'Salt to taste'
        ],
        instructions: [
            'Rinse rice until water runs clear.',
            'Cook rice with 2 cups of water.',
            'While rice cooks, prepare vegetables.',
            'Steam vegetables for 8-10 minutes until tender-crisp.',
            'Season with a small amount of salt.',
            'Serve vegetables over rice.'
        ]
    },
    {
        id: 'applesauce',
        title: 'Homemade Applesauce',
        image: 'https://images.unsplash.com/photo-1568909344668-6f14a07b56a0?w=800&auto=format&fit=crop',
        description: 'Smooth and gentle homemade applesauce, perfect for settling an upset stomach.',
        prepTime: '25 mins',
        servings: '4 servings',
        calories: '95 cal',
        category: 'Snack',
        tags: ['Snack', 'Sugar-Free'],
        ingredients: [
            '4 apples, peeled and chopped',
            '1/4 cup water',
            '1 tsp cinnamon (optional)',
            '1 tbsp honey (optional)'
        ],
        instructions: [
            'Peel and chop apples into chunks.',
            'Place apples and water in a pot.',
            'Bring to a boil, then reduce heat.',
            'Simmer for 15-20 minutes until soft.',
            'Mash or blend to desired consistency.',
            'Add cinnamon and honey if desired.'
        ]
    },
    {
        id: 'avocado-toast',
        title: 'Simple Avocado Toast',
        image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=800&auto=format&fit=crop',
        description: 'Light and nutritious avocado toast that\'s gentle on the digestive system.',
        prepTime: '5 mins',
        servings: '1 serving',
        calories: '290 cal',
        category: 'Light Meal',
        tags: ['Light Meal', 'Vegetarian'],
        ingredients: [
            '2 slices whole grain bread',
            '1 ripe avocado',
            'Salt to taste',
            'Lemon juice (optional)'
        ],
        instructions: [
            'Toast the bread slices.',
            'Cut avocado in half and remove pit.',
            'Mash avocado in a bowl.',
            'Spread mashed avocado on toast.',
            'Add a pinch of salt.',
            'Squeeze lemon juice if desired.'
        ]
    }
];

// Function to create recipe cards
function createRecipeCards() {
    const recipeGrid = document.querySelector('.recipe-grid');
    recipeGrid.innerHTML = ''; // Clear existing content

    easyOnStomachRecipes.forEach(recipe => {
        const card = document.createElement('div');
        card.className = 'recipe-card';
        card.setAttribute('data-recipe-id', recipe.id);

        card.innerHTML = `
            <div class="recipe-image">
                <img src="${recipe.image}" alt="${recipe.title}">
                <span class="recipe-category">${recipe.category}</span>
            </div>
            <div class="recipe-content">
                <h3>${recipe.title}</h3>
                <p>${recipe.description}</p>
                <div class="recipe-info">
                    <span><i class="far fa-clock"></i> ${recipe.prepTime}</span>
                    <span><i class="fas fa-fire"></i> ${recipe.calories}</span>
                    <span><i class="fas fa-utensils"></i> ${recipe.servings}</span>
                </div>
                <button class="view-recipe" data-recipe="${recipe.id}">View Recipe</button>
            </div>
        `;

        recipeGrid.appendChild(card);
    });

    // Add event listeners to view recipe buttons
    document.querySelectorAll('.view-recipe').forEach(button => {
        button.addEventListener('click', () => {
            const recipeId = button.getAttribute('data-recipe');
            const recipeDetails = document.getElementById(`${recipeId}-details`);
            if (recipeDetails) {
                recipeDetails.style.display = 'block';
            }
        });
    });

    // Add event listeners to close modal buttons
    document.querySelectorAll('.close-modal').forEach(button => {
        button.addEventListener('click', (e) => {
            const modal = e.target.closest('.recipe-details');
            if (modal) {
                modal.style.display = 'none';
            }
        });
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('recipe-details')) {
            e.target.style.display = 'none';
        }
    });
}

// Modal functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get all view recipe buttons
    const viewRecipeButtons = document.querySelectorAll('.view-recipe');
    const closeModalButtons = document.querySelectorAll('.close-modal');

    // Add click event to view recipe buttons
    viewRecipeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const recipeId = this.getAttribute('data-recipe');
            const modal = document.getElementById(`${recipeId}-details`);
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
        });
    });

    // Add click event to close buttons
    closeModalButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.recipe-details');
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        });
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('recipe-details')) {
            event.target.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});

// Initialize recipe cards when the page loads
document.addEventListener('DOMContentLoaded', createRecipeCards);
