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
        {
            name: "Captain and Cola",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "4 oz cola",
                "Lime wedge",
                "Ice"
            ],
            instructions: [
                "Fill a glass with ice.",
                "Add Captain Morgan Spiced Gold and cola.",
                "Stir gently and garnish with a lime wedge."
            ]
        },
        {
            name: "Spiced Apple",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "3 oz apple juice",
                "0.5 oz lemon juice",
                "Cinnamon stick",
                "Ice"
            ],
            instructions: [
                "Fill a shaker with ice.",
                "Add Captain Morgan Spiced Gold, apple juice, and lemon juice.",
                "Shake well and strain into a glass filled with ice.",
                "Garnish with a cinnamon stick."
            ]
        },
        {
            name: "Spicy Ginger",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "4 oz ginger beer",
                "Lime wedge",
                "Ice"
            ],
            instructions: [
                "Fill a glass with ice.",
                "Add Captain Morgan Spiced Gold and ginger beer.",
                "Stir gently and garnish with a lime wedge."
            ]
        },
        {
            name: "Captain's Mule",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "3 oz ginger beer",
                "0.5 oz lime juice",
                "Mint leaves",
                "Ice"
            ],
            instructions: [
                "Fill a glass with ice.",
                "Add Captain Morgan Spiced Gold, ginger beer, and lime juice.",
                "Stir gently and garnish with mint leaves."
            ]
        },
        {
            name: "Spiced Mojito",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "2 oz soda water",
                "0.5 oz lime juice",
                "Mint leaves",
                "1 tsp sugar",
                "Ice"
            ],
            instructions: [
                "Muddle mint leaves and sugar in a glass.",
                "Fill the glass with ice.",
                "Add Captain Morgan Spiced Gold and lime juice.",
                "Top with soda water and stir gently."
            ]
        },
        {
            name: "Tropical Storm",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "2 oz orange juice",
                "2 oz pineapple juice",
                "Grenadine",
                "Ice"
            ],
            instructions: [
                "Fill a shaker with ice.",
                "Add Captain Morgan Spiced Gold, orange juice, and pineapple juice.",
                "Shake well and strain into a glass filled with ice.",
                "Drizzle grenadine on top and garnish with an orange slice."
            ]
        },
        {
            name: "Spiced Lemonade",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "3 oz lemonade",
                "Lemon wedge",
                "Ice"
            ],
            instructions: [
                "Fill a glass with ice.",
                "Add Captain Morgan Spiced Gold and lemonade.",
                "Stir gently and garnish with a lemon wedge."
            ]
        },
        {
            name: "Spiced Rum Punch",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "2 oz pineapple juice",
                "2 oz orange juice",
                "0.5 oz grenadine",
                "Ice"
            ],
            instructions: [
                "Fill a shaker with ice.",
                "Add Captain Morgan Spiced Gold, pineapple juice, orange juice, and grenadine.",
                "Shake well and strain into a glass filled with ice.",
                "Garnish with a cherry and orange slice."
            ]
        },
        {
            name: "Captain's Coffee",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "5 oz hot coffee",
                "Whipped cream",
                "Ground cinnamon"
            ],
            instructions: [
                "Pour hot coffee into a mug.",
                "Add Captain Morgan Spiced Gold and stir.",
                "Top with whipped cream and a sprinkle of ground cinnamon."
            ]
        },
        {
            name: "Spiced Orange",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "3 oz orange juice",
                "Orange slice",
                "Ice"
            ],
            instructions: [
                "Fill a glass with ice.",
                "Add Captain Morgan Spiced Gold and orange juice.",
                "Stir gently and garnish with an orange slice."
            ]
        },
        {
            name: "Captain's Cranberry",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "3 oz cranberry juice",
                "Lime wedge",
                "Ice"
            ],
            instructions: [
                "Fill a glass with ice.",
                "Add Captain Morgan Spiced Gold and cranberry juice.",
                "Stir gently and garnish with a lime wedge."
            ]
        },
        {
            name: "Spiced Mango",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "3 oz mango juice",
                "Lime wedge",
                "Ice"
            ],
            instructions: [
                "Fill a glass with ice.",
                "Add Captain Morgan Spiced Gold and mango juice.",
                "Stir gently and garnish with a lime wedge."
            ]
        },
        {
            name: "Captain's Sunset",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "3 oz orange juice",
                "0.5 oz grenadine",
                "Ice"
            ],
            instructions: [
                "Fill a glass with ice.",
                "Add Captain Morgan Spiced Gold and orange juice.",
                "Stir gently and drizzle grenadine on top.",
                "Garnish with an orange slice."
            ]
        },
        {
            name: "Spiced Tea",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "4 oz iced tea",
                "Lemon wedge",
                "Ice"
            ],
            instructions: [
                "Fill a glass with ice.",
                "Add Captain Morgan Spiced Gold and iced tea.",
                "Stir gently and garnish with a lemon wedge."
            ]
        },
        {
            name: "Captain's Pineapple",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "3 oz pineapple juice",
                "Pineapple slice",
                "Ice"
            ],
            instructions: [
                "Fill a glass with ice.",
                "Add Captain Morgan Spiced Gold and pineapple juice.",
                "Stir gently and garnish with a pineapple slice."
            ]
        },
        {
            name: "Spiced Berry",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "3 oz mixed berry juice",
                "Berry skewer",
                "Ice"
            ],
            instructions: [
                "Fill a glass with ice.",
                "Add Captain Morgan Spiced Gold and mixed berry juice.",
                "Stir gently and garnish with a berry skewer."
            ]
        },
        {
            name: "Captain's Sour",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "0.5 oz lemon juice",
                "0.5 oz lime juice",
                "0.5 oz simple syrup",
                "Lemon twist",
                "Ice"
            ],
            instructions: [
                "Fill a shaker with ice.",
                "Add Captain Morgan Spiced Gold, lemon juice, lime juice, and simple syrup.",
                "Shake well and strain into a glass filled with ice.",
                "Garnish with a lemon twist."
            ]
        },
        {
            name: "Spiced Mint Julep",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "0.5 oz simple syrup",
                "Mint leaves",
                "Ice"
            ],
            instructions: [
                "Muddle mint leaves and simple syrup in a glass.",
                "Fill the glass with ice.",
                "Add Captain Morgan Spiced Gold.",
                "Stir gently and garnish with more mint leaves."
            ]
        },
        {
            name: "Captain's Tropical",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "2 oz orange juice",
                "2 oz pineapple juice",
                "Pineapple slice",
                "Ice"
            ],
            instructions: [
                "Fill a shaker with ice.",
                "Add Captain Morgan Spiced Gold, orange juice, and pineapple juice.",
                "Shake well and strain into a glass filled with ice.",
                "Garnish with a pineapple slice."
            ]
        }
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
