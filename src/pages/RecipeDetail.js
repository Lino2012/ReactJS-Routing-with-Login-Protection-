import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { useFavorites } from '../App';
import './RecipeDetail.css';

const RecipeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const favorite = isFavorite(parseInt(id));

  // Mock recipe data
  const recipes = {
    1: {
      id: 1,
      title: "Secret Veggie Stir-Fry",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      description: "A quick, healthy meal with a hidden spice twist that will surprise your taste buds!",
      prepTime: "10 mins",
      cookTime: "15 mins",
      servings: 2,
      difficulty: "Easy",
      rating: "4.8",
      ingredients: [
        "2 cups mixed vegetables (bell peppers, broccoli, carrots)",
        "1 tbsp olive oil",
        "2 cloves garlic, minced",
        "1 tsp ginger, grated",
        "2 tbsp soy sauce",
        "1 tbsp honey",
        "1 tsp sesame oil",
        "The Secret: Pinch of smoked paprika",
        "Green onions for garnish"
      ],
      instructions: [
        "Heat olive oil in a large wok or skillet over high heat.",
        "Add minced garlic and grated ginger, stir for 30 seconds until fragrant.",
        "Add mixed vegetables and stir-fry for 5-7 minutes until crisp-tender.",
        "Add the secret ingredient - smoked paprika - and mix well.",
        "Pour in soy sauce, honey, and sesame oil. Toss to combine.",
        "Cook for another 2 minutes until everything is well coated.",
        "Garnish with chopped green onions and serve immediately."
      ],
      tips: [
        "The smoked paprika adds a depth of flavor that mimics meatiness - perfect for vegetarian dishes!",
        "Don't overcook the vegetables to maintain their crunch and nutrients.",
        "Serve over rice or noodles for a complete meal."
      ]
    },
    2: {
      id: 2,
      title: "Molten Chocolate Secret",
      image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      description: "Indulge in gooey chocolate bliss with our pro baker's secret technique.",
      prepTime: "15 mins",
      cookTime: "12 mins",
      servings: 4,
      difficulty: "Medium",
      rating: "4.9",
      ingredients: [
        "4 oz dark chocolate (70% cocoa)",
        "4 tbsp unsalted butter",
        "2 large eggs",
        "2 large egg yolks",
        "1/4 cup granulated sugar",
        "2 tbsp all-purpose flour",
        "The Secret: 1 tsp instant coffee powder",
        "Pinch of salt",
        "Butter for ramekins",
        "Cocoa powder for dusting"
      ],
      instructions: [
        "Preheat oven to 425°F (220°C). Butter four ramekins and dust with cocoa powder.",
        "Melt chocolate and butter in a double boiler, stirring until smooth.",
        "Add the secret ingredient - instant coffee powder - to enhance chocolate flavor.",
        "In a separate bowl, whisk eggs, egg yolks, and sugar until pale and thick.",
        "Fold the melted chocolate mixture into the egg mixture.",
        "Sift in flour and salt, fold gently until just combined.",
        "Divide batter among prepared ramekins and bake for 10-12 minutes.",
        "Edges should be set but center still soft. Let rest for 1 minute before serving."
      ],
      tips: [
        "The instant coffee powder doesn't make it taste like coffee - it intensifies the chocolate flavor!",
        "Don't overbake - the center should be liquid for the perfect lava flow.",
        "Serve immediately with vanilla ice cream or fresh berries."
      ]
    },
    3: {
      id: 3,
      title: "Hidden Herb Pasta",
      image: "https://images.unsplash.com/photo-1598866594230-a7c12756260f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      description: "Creamy sauce with a secret ingredient that elevates the flavor to restaurant quality.",
      prepTime: "10 mins",
      cookTime: "20 mins",
      servings: 4,
      difficulty: "Easy",
      rating: "4.7",
      ingredients: [
        "12 oz fettuccine pasta",
        "2 tbsp olive oil",
        "3 cloves garlic, minced",
        "1 cup heavy cream",
        "1 cup grated Parmesan cheese",
        "The Secret: 1/4 cup pasta water",
        "2 tbsp fresh basil, chopped",
        "1 tbsp fresh parsley, chopped",
        "Salt and black pepper to taste",
        "Red pepper flakes (optional)"
      ],
      instructions: [
        "Cook pasta according to package directions until al dente.",
        "Reserve 1/4 cup of pasta water before draining - this is the secret ingredient!",
        "Heat olive oil in a large skillet over medium heat. Add garlic and cook until fragrant.",
        "Pour in heavy cream and bring to a simmer.",
        "Gradually whisk in Parmesan cheese until smooth and creamy.",
        "Add the secret pasta water - the starch helps emulsify the sauce.",
        "Add cooked pasta to the sauce and toss to coat evenly.",
        "Stir in fresh herbs and season with salt, pepper, and red pepper flakes.",
        "Serve immediately with extra Parmesan on top."
      ],
      tips: [
        "The starchy pasta water is the key to a perfectly creamy sauce that clings to the pasta!",
        "Always reserve pasta water before draining - it's liquid gold for sauces.",
        "Use freshly grated Parmesan for the best flavor and meltability."
      ]
    },
    4: {
      id: 4,
      title: "Magic Morning Pancakes",
      image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      description: "Fluffy pancakes with a secret ingredient for perfect texture every time.",
      prepTime: "10 mins",
      cookTime: "15 mins",
      servings: 4,
      difficulty: "Easy",
      rating: "4.6"
    },
    5: {
      id: 5,
      title: "Secret Spice Burger",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      description: "Juicy burger with a hidden spice blend that will amaze your guests.",
      prepTime: "15 mins",
      cookTime: "10 mins",
      servings: 2,
      difficulty: "Medium",
      rating: "4.8"
    },
    6: {
      id: 6,
      title: "Mystery Fruit Smoothie",
      image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      description: "Refreshing smoothie with a secret ingredient for extra creaminess.",
      prepTime: "5 mins",
      cookTime: "0 mins",
      servings: 2,
      difficulty: "Easy",
      rating: "4.5"
    }
  };

  const recipe = recipes[id];

  const handleFavoriteClick = () => {
    if (favorite) {
      removeFromFavorites(recipe.id);
    } else {
      addToFavorites(recipe);
    }
  };

  if (!recipe) {
    return (
      <div className="recipe-detail">
        <Header />
        <div className="not-found">
          <h2>Recipe Not Found</h2>
          <p>Sorry, the recipe you're looking for doesn't exist.</p>
          <Link to="/dashboard" className="back-button">Back to Dashboard</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="recipe-detail">
      <Header />
      
      <div className="recipe-hero">
        <div className="recipe-hero-content">
          <Link to="/dashboard" className="back-button">← Back to Recipes</Link>
          <h1>{recipe.title}</h1>
          <p className="recipe-description">{recipe.description}</p>
          <div className="recipe-meta">
            <span>⭐ {recipe.rating}</span>
            <span>⏱️ Prep: {recipe.prepTime}</span>
            <span>👨‍🍳 Cook: {recipe.cookTime}</span>
            <span>🍽️ Serves {recipe.servings}</span>
            <span>📊 {recipe.difficulty}</span>
          </div>
        </div>
        <div className="recipe-image-container">
          <img src={recipe.image} alt={recipe.title} />
          <button 
            className={`favorite-button large ${favorite ? 'favorited' : ''}`}
            onClick={handleFavoriteClick}
          >
            {favorite ? '❤️ Saved' : '🤍 Save Recipe'}
          </button>
        </div>
      </div>

      <div className="recipe-content">
        {recipe.ingredients && (
          <div className="ingredients-section">
            <h2>Ingredients</h2>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className={ingredient.includes('Secret:') ? 'secret-ingredient' : ''}>
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
        )}

        {recipe.instructions && (
          <div className="instructions-section">
            <h2>Instructions</h2>
            <ol>
              {recipe.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
          </div>
        )}

        {recipe.tips && (
          <div className="tips-section">
            <h2>Chef's Tips</h2>
            <ul>
              {recipe.tips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="recipe-actions">
          <button 
            className={`save-recipe ${favorite ? 'saved' : ''}`}
            onClick={handleFavoriteClick}
          >
            {favorite ? '❤️ Remove from Favorites' : '💾 Save to Favorites'}
          </button>
          <button className="print-recipe" onClick={() => window.print()}>🖨️ Print Recipe</button>
          <button className="share-recipe">📤 Share</button>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;