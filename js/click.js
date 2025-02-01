        function openRecipe(id) {
            document.getElementById(id + '-details').style.display = 'block';
            document.body.style.overflow = 'hidden';
        }

        function closeRecipe(id) {
            document.getElementById(id + '-details').style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        // Close modal when clicking outside
        window.onclick = function(event) {
            if (event.target.classList.contains('recipe-details')) {
                event.target.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        }