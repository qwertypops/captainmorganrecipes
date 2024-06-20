document.addEventListener('DOMContentLoaded', function () {
    const recipes = [
        {
            name: "Captain's Delight",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "3 oz pineapple juice",
                "0.5 oz lime juice",
                "0.5 oz simple syrup",
                "Ice"
            ],
            instructions: [
                "Fill a shaker with ice.",
                "Add Captain Morgan Spiced Gold, pineapple juice, lime juice, and simple syrup.",
                "Shake well and strain into a glass filled with ice.",
                "Garnish with a pineapple slice."
            ]
        },
        // Add 99 more recipes here
    ];

    const recipeList = document.getElementById('recipe-list');

    recipes.forEach(recipe => {
        const recipeDiv = document.createElement('div');
        recipeDiv.className = 'recipe';

        const recipeName = document.createElement('h3');
        recipeName.textContent = recipe.name;
        recipeDiv.appendChild(recipeName);

        const ingredientsList = document.createElement('ul');
        recipe.ingredients.forEach(ingredient => {
            const li = document.createElement('li');
            li.textContent = ingredient;
            ingredientsList.appendChild(li);
        });
        recipeDiv.appendChild(ingredientsList);

        const instructionsList = document.createElement('ol');
        recipe.instructions.forEach(instruction => {
            const li = document.createElement('li');
            li.textContent = instruction;
            instructionsList.appendChild(li);
        });
        recipeDiv.appendChild(instructionsList);

        recipeList.appendChild(recipeDiv);
    });
});
