document.addEventListener('DOMContentLoaded', () => {
    // Get search query from URL
    const urlParams = new URLSearchParams(window.location.search);
    const searchTerm = urlParams.get('q') || sessionStorage.getItem('searchTerm') || '';
    
    // Display search term
    const searchQueryElement = document.getElementById('search-query');
    searchQueryElement.textContent = `Showing results for: "${searchTerm}"`;

    // Get all recipes from recipe data
    const allRecipes = [];
    for (const category in recipeData) {
        allRecipes.push(...recipeData[category]);
    }

    // Search function
    function searchRecipes(query) {
        return allRecipes.filter(recipe => {
            const searchableText = `${recipe.name} ${recipe.description} ${recipe.ingredients.join(' ')} ${recipe.instructions.join(' ')}`.toLowerCase();
            return searchableText.includes(query.toLowerCase());
        });
    }

    // Display search results
    function displayResults(results) {
        const resultsContainer = document.getElementById('search-results');
        resultsContainer.innerHTML = '';

        if (results.length === 0) {
            resultsContainer.innerHTML = `
                <div class="no-results">
                    <p>No recipes found matching your search.</p>
                    <p>Try different keywords or browse our categories.</p>
                </div>
            `;
            return;
        }

        results.forEach(recipe => {
            const recipeCard = document.createElement('div');
            recipeCard.className = 'recipe-card';
            recipeCard.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.name}">
                <div class="recipe-content">
                    <h3>${recipe.name}</h3>
                    <p>${recipe.description}</p>
                    <button class="view-recipe-btn" onclick="openRecipeModal('${recipe.name}')">View Recipe</button>
                </div>
            `;
            resultsContainer.appendChild(recipeCard);
        });
    }

    // Perform search and display results
    if (searchTerm) {
        const results = searchRecipes(searchTerm);
        displayResults(results);
    }

    // Create recipe modal
    function openRecipeModal(recipeName) {
        const recipe = allRecipes.find(r => r.name === recipeName);
        if (!recipe) return;

        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-btn">&times;</span>
                <h2>${recipe.name}</h2>
                <img src="${recipe.image}" alt="${recipe.name}">
                <div class="recipe-details">
                    <h3>Description</h3>
                    <p>${recipe.description}</p>
                    
                    <h3>Ingredients</h3>
                    <ul>
                        ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                    </ul>
                    
                    <h3>Instructions</h3>
                    <ol>
                        ${recipe.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
                    </ol>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        
        const closeBtn = modal.querySelector('.close-btn');
        closeBtn.onclick = () => modal.remove();
        
        window.onclick = (event) => {
            if (event.target === modal) {
                modal.remove();
            }
        };
    }

    // Make openRecipeModal available globally
    window.openRecipeModal = openRecipeModal;
});
