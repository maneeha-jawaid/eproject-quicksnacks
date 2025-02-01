// Main JavaScript file for QuickSnacks website

// Configuration
const CONFIG = {
    sliderInterval: 5000,
    recipeLoadCount: 8,
    animationDuration: 300,
    mapZoomLevel: 15
};

// Utility functions
const utils = {
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    formatTime(minutes) {
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        return hours ? `${hours}h ${mins}m` : `${mins}m`;
    },

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    },

    getUrlParams() {
        return new URLSearchParams(window.location.search);
    }
};

// Recipe Card Generation
function createRecipeCard(recipeId, recipeData) {
    return `
        <div class="recipe-card">
            <div class="recipe-image">
                <img src="${recipeData.image}" alt="${recipeData.title}">
                <span class="recipe-category">${recipeData.category}</span>
            </div>
            <div class="recipe-content">
                <h3>${recipeData.title}</h3>
                <p>${recipeData.shortDescription}</p>
                <div class="recipe-info">
                    <span><i class="far fa-clock"></i> ${recipeData.prepTime}</span>
                    <span><i class="fas fa-fire"></i> ${recipeData.calories} cal</span>
                    <span><i class="fas fa-dumbbell"></i> ${recipeData.nutrition.protein} protein</span>
                </div>
                <button class="view-recipe" data-recipe="${recipeId}">View Recipe</button>
            </div>
        </div>
    `;
}

function createRecipeModal(recipeId, recipeData) {
    return `
        <div class="recipe-details" id="${recipeId}-details">
            <div class="recipe-modal">
                <div class="recipe-modal-content">
                    <span class="close-modal">&times;</span>
                    <h2>${recipeData.title}</h2>
                    <div class="recipe-sections">
                        <div class="ingredients-section">
                            <h3>Ingredients</h3>
                            <ul>
                                ${recipeData.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="instructions-section">
                            <h3>Instructions</h3>
                            <ol>
                                ${recipeData.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
                            </ol>
                        </div>
                        <div class="nutrition-section">
                            <h3>Nutrition Information</h3>
                            <ul>
                                ${Object.entries(recipeData.nutrition).map(([key, value]) => 
                                    `<li>${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}</li>`
                                ).join('')}
                            </ul>
                        </div>
                        <div class="emoji-rating">
                            <h3>Rate this recipe:</h3>
                            <div class="emoji-options">
                                <span class="emoji-option" data-rating="1">😐</span>
                                <span class="emoji-option" data-rating="2">🙂</span>
                                <span class="emoji-option" data-rating="3">😊</span>
                                <span class="emoji-option" data-rating="4">😃</span>
                                <span class="emoji-option" data-rating="5">😍</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Slider functionality
class Slider {
    constructor() {
        this.slider = document.querySelector('.slider');
        if (!this.slider) return;

        this.slides = Array.from(this.slider.querySelectorAll('.slide'));
        this.dotsContainer = document.querySelector('.slider-dots');
        this.prevBtn = document.querySelector('.slider-btn.prev');
        this.nextBtn = document.querySelector('.slider-btn.next');
        this.currentSlide = 0;
        this.slideInterval = null;
        this.intervalDuration = CONFIG.sliderInterval;

        this.init();
    }

    init() {
        if (this.slides.length <= 1) return;

        // Create dots
        this.slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => this.goToSlide(index));
            this.dotsContainer.appendChild(dot);
        });

        // Add event listeners
        this.prevBtn.addEventListener('click', () => this.prevSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());

        // Add keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.prevSlide();
            if (e.key === 'ArrowRight') this.nextSlide();
        });

        // Add touch support
        let touchStartX = 0;
        let touchEndX = 0;

        this.slider.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        this.slider.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            if (touchStartX - touchEndX > 50) this.nextSlide();
            if (touchStartX - touchEndX < -50) this.prevSlide();
        });

        // Start autoplay
        this.startAutoplay();

        // Pause autoplay on hover
        this.slider.addEventListener('mouseenter', () => this.stopAutoplay());
        this.slider.addEventListener('mouseleave', () => this.startAutoplay());

        // Pause autoplay when page is not visible
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.stopAutoplay();
            } else {
                this.startAutoplay();
            }
        });
    }

    updateSlides() {
        this.slides.forEach((slide, index) => {
            slide.classList.remove('active', 'next', 'prev');
            if (index === this.currentSlide) {
                slide.classList.add('active');
            } else if (index === (this.currentSlide + 1) % this.slides.length) {
                slide.classList.add('next');
            } else if (index === (this.currentSlide - 1 + this.slides.length) % this.slides.length) {
                slide.classList.add('prev');
            }
        });

        const dots = this.dotsContainer.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentSlide);
        });
    }

    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        this.updateSlides();
    }

    prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.updateSlides();
    }

    goToSlide(index) {
        this.currentSlide = index;
        this.updateSlides();
    }

    startAutoplay() {
        if (this.slides.length <= 1) return;
        this.stopAutoplay();
        this.slideInterval = setInterval(() => this.nextSlide(), this.intervalDuration);
    }

    stopAutoplay() {
        clearInterval(this.slideInterval);
    }
}

// Recipe functionality
class RecipeManager {
    constructor() {
        this.recipesContainer = document.querySelector('.recipes-grid');
        this.filterButtons = document.querySelectorAll('.filter-btn');
        this.searchInput = document.querySelector('#recipe-search');
        this.loadMoreBtn = document.querySelector('.load-more-btn');
        this.currentFilter = 'all';
        this.searchQuery = '';
        this.visibleRecipes = CONFIG.recipeLoadCount;

        this.init();
    }

    init() {
        if (!this.recipesContainer) return;

        // Initialize filters
        this.filterButtons?.forEach(btn => {
            btn.addEventListener('click', () => {
                this.filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.currentFilter = btn.dataset.filter;
                this.filterRecipes();
            });
        });

        // Initialize search
        if (this.searchInput) {
            this.searchInput.addEventListener('input', utils.debounce(() => {
                this.searchQuery = this.searchInput.value.toLowerCase();
                this.filterRecipes();
            }, 300));
        }

        // Initialize load more
        this.loadMoreBtn?.addEventListener('click', () => {
            this.visibleRecipes += CONFIG.recipeLoadCount;
            this.filterRecipes();
        });

        // Check URL parameters
        const params = utils.getUrlParams();
        if (params.has('search')) {
            this.searchQuery = params.get('search').toLowerCase();
            if (this.searchInput) this.searchInput.value = params.get('search');
        }
        if (params.has('category')) {
            this.currentFilter = params.get('category').toLowerCase();
            const filterBtn = Array.from(this.filterButtons).find(btn => 
                btn.dataset.filter === this.currentFilter
            );
            if (filterBtn) {
                this.filterButtons.forEach(b => b.classList.remove('active'));
                filterBtn.classList.add('active');
            }
        }

        // Load initial recipes
        this.loadRecipes();
    }

    loadRecipes() {
        if (!this.recipesContainer) return;
        
        // Clear container
        this.recipesContainer.innerHTML = '';

        // Load and display recipes
        featuredRecipes.forEach(recipe => {
            const card = this.createRecipeCard(recipe);
            this.recipesContainer.appendChild(card);
        });

        this.filterRecipes();
    }

    createRecipeCard(recipe) {
        const card = document.createElement('div');
        card.className = 'recipe-card';
        card.dataset.category = recipe.category.toLowerCase();
        card.dataset.tags = recipe.tags.join(' ');

        card.innerHTML = `
            <div class="recipe-image">
                <img src="${recipe.image}" alt="${recipe.title}">
                <div class="recipe-overlay">
                    <span class="recipe-category">${recipe.category}</span>
                    <span class="recipe-difficulty">${recipe.difficulty}</span>
                </div>
            </div>
            <div class="recipe-content">
                <h3>${recipe.title}</h3>
                <p>${recipe.description}</p>
                <div class="recipe-meta">
                    <span><i class="fas fa-clock"></i> ${recipe.prepTime}</span>
                    <span><i class="fas fa-user-friends"></i> ${recipe.servings} servings</span>
                    <span><i class="fas fa-fire"></i> ${recipe.calories} cal</span>
                </div>
                <button class="view-recipe" data-recipe="${recipe.title.replace(/\s+/g, '-').toLowerCase()}">View Recipe</button>
            </div>
        `;

        return card;
    }

    filterRecipes() {
        if (!this.recipesContainer) return;

        const cards = Array.from(this.recipesContainer.children);
        let visibleCount = 0;

        cards.forEach(card => {
            const matchesFilter = this.currentFilter === 'all' || 
                                card.dataset.category === this.currentFilter;
            const matchesSearch = !this.searchQuery || 
                                card.textContent.toLowerCase().includes(this.searchQuery) ||
                                card.dataset.tags.includes(this.searchQuery);
            
            const shouldBeVisible = matchesFilter && matchesSearch && 
                                  visibleCount < this.visibleRecipes;

            if (shouldBeVisible) {
                card.style.display = '';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        // Update load more button visibility
        if (this.loadMoreBtn) {
            const totalMatches = cards.filter(card => {
                const matchesFilter = this.currentFilter === 'all' || 
                                    card.dataset.category === this.currentFilter;
                const matchesSearch = !this.searchQuery || 
                                    card.textContent.toLowerCase().includes(this.searchQuery) ||
                                    card.dataset.tags.includes(this.searchQuery);
                return matchesFilter && matchesSearch;
            }).length;

            this.loadMoreBtn.style.display = visibleCount < totalMatches ? '' : 'none';
        }

        // Show no results message if needed
        let noResultsMsg = this.recipesContainer.querySelector('.no-results');
        if (visibleCount === 0) {
            if (!noResultsMsg) {
                noResultsMsg = document.createElement('div');
                noResultsMsg.className = 'no-results';
                noResultsMsg.innerHTML = `
                    <i class="fas fa-search"></i>
                    <h3>No recipes found</h3>
                    <p>Try adjusting your search or filter criteria</p>
                `;
                this.recipesContainer.appendChild(noResultsMsg);
            }
        } else if (noResultsMsg) {
            noResultsMsg.remove();
        }
    }
}

// Recipe Modal Functionality
function initializeRecipeModals() {
    const recipeButtons = document.querySelectorAll('.view-recipe');
    const modals = document.querySelectorAll('.recipe-details');
    const closeButtons = document.querySelectorAll('.close-modal');

    // Open modal when clicking view recipe
    recipeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const recipeId = button.getAttribute('data-recipe');
            const modal = document.getElementById(`${recipeId}-details`);
            if (modal) {
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close modal when clicking X button
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.recipe-details');
            if (modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        modals.forEach(modal => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    });
}

// Initialize emoji rating system
function initializeRatings() {
    const emojiOptions = document.querySelectorAll('.emoji-option');
    
    emojiOptions.forEach(emoji => {
        emoji.addEventListener('click', function() {
            // Remove selected class from all emojis in this rating group
            const ratingGroup = this.closest('.emoji-rating');
            ratingGroup.querySelectorAll('.emoji-option').forEach(e => {
                e.classList.remove('selected');
            });
            
            // Add selected class to clicked emoji
            this.classList.add('selected');
            
            // Get recipe ID and rating value
            const recipeId = this.closest('.recipe-details').id;
            const rating = this.getAttribute('data-rating');
            
            // Save rating (you can implement storage logic here)
            saveRating(recipeId, rating);
            
            // Show thank you message
            showThankYouMessage(this.closest('.emoji-rating'));
        });
    });
}

function showThankYouMessage(container) {
    // Create and show thank you message
    const message = document.createElement('div');
    message.className = 'thank-you-message';
    message.style.color = '#28a745';
    message.style.marginTop = '10px';
    message.style.fontWeight = 'bold';
    message.innerHTML = 'Thanks for rating! 🎉';
    
    // Remove any existing thank you message
    const existingMessage = container.querySelector('.thank-you-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Add new message
    container.appendChild(message);
    
    // Remove message after 3 seconds
    setTimeout(() => {
        message.remove();
    }, 3000);
}

function saveRating(recipeId, rating) {
    // Get existing ratings from localStorage
    const ratings = JSON.parse(localStorage.getItem('recipeRatings') || '{}');
    
    // Save new rating
    ratings[recipeId] = rating;
    
    // Store back in localStorage
    localStorage.setItem('recipeRatings', JSON.stringify(ratings));
}

function loadSavedRatings() {
    const ratings = JSON.parse(localStorage.getItem('recipeRatings') || '{}');
    
    Object.entries(ratings).forEach(([recipeId, rating]) => {
        const modal = document.getElementById(recipeId);
        if (modal) {
            const ratingOption = modal.querySelector(`.emoji-option[data-rating="${rating}"]`);
            if (ratingOption) {
                ratingOption.classList.add('selected');
            }
        }
    });
}

// Handle newsletter subscription
document.getElementById('subscribe-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    
    // Show success message
    const button = this.querySelector('.subscribe-btn');
    const originalText = button.innerHTML;
    button.innerHTML = '<i class="fas fa-check"></i> Subscribed!';
    button.style.background = '#2ecc71';
    
    // Reset form
    this.reset();
    
    // Restore button after 3 seconds
    setTimeout(() => {
        button.innerHTML = originalText;
        button.style.background = '#ff6b6b';
    }, 3000);
    
    // Here you would typically send the email to your backend
    console.log('Subscribed email:', email);
});

// Search Functionality
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');

    // Handle search
    function handleSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        if (searchTerm) {
            // Store the search term in sessionStorage
            sessionStorage.setItem('searchTerm', searchTerm);
            // Redirect to search results page
            window.location.href = `search-results.html?q=${encodeURIComponent(searchTerm)}`;
        }
    }

    // Search button click
    searchBtn.addEventListener('click', handleSearch);

    // Enter key press in search input
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });

    // Handle mobile search toggle
    if (window.innerWidth <= 768) {
        const searchContainer = document.querySelector('.search-container');
        searchBtn.addEventListener('click', (e) => {
            e.preventDefault();
            searchContainer.classList.toggle('active');
            if (searchContainer.classList.contains('active')) {
                searchInput.focus();
            }
        });
    }
});

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize slider
    new Slider();

    // Initialize recipes
    new RecipeManager();

    // Initialize recipe modals
    initializeRecipeModals();

    // Initialize ratings
    initializeRatings();
    loadSavedRatings();

    // Initialize smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Initialize back to top button
    const backToTopBtn = document.querySelector('.back-to-top');
    if (backToTopBtn) {
        window.addEventListener('scroll', utils.debounce(() => {
            backToTopBtn.classList.toggle('visible', window.scrollY > 300);
        }, 100));

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Initialize recipe cards and modals
    const recipeGrid = document.querySelector('.recipe-grid');
    const mainElement = document.querySelector('main');
    
    // Generate recipe cards
    if (recipeGrid) {
        Object.entries(healthySnackRecipes).forEach(([recipeId, recipeData]) => {
            recipeGrid.innerHTML += createRecipeCard(recipeId, recipeData);
        });
    }
    
    // Generate recipe modals
    Object.entries(healthySnackRecipes).forEach(([recipeId, recipeData]) => {
        mainElement.innerHTML += createRecipeModal(recipeId, recipeData);
    });

    // Modal functionality
    const viewButtons = document.querySelectorAll('.view-recipe');
    viewButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const recipeId = button.getAttribute('data-recipe');
            const modal = document.getElementById(`${recipeId}-details`);
            if (modal) {
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close modal functionality
    document.querySelectorAll('.close-modal').forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.recipe-details');
            if (modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('recipe-details')) {
            e.target.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});
