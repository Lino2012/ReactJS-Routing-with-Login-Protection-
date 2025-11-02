import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFavorites } from '../App';

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const favorite = isFavorite(recipe.id);

  const handleViewRecipe = () => {
    navigate(`/recipe/${recipe.id}`);
  };

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    if (favorite) {
      removeFromFavorites(recipe.id);
    } else {
      addToFavorites(recipe);
    }
  };

  return (
    <div className="recipe-card">
      <div className="recipe-image-container">
        <img src={recipe.image} alt={recipe.title} />
        <button 
          className={`favorite-button ${favorite ? 'favorited' : ''}`}
          onClick={handleFavoriteClick}
          aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          {favorite ? '❤️' : '🤍'}
        </button>
      </div>
      <div className="recipe-info">
        <h3>{recipe.title}</h3>
        <p>{recipe.description}</p>
        <div className="recipe-actions">
          <span>★ ★ ★ ★ ★ ({recipe.rating})</span>
          <div className="action-buttons">
            <button onClick={handleViewRecipe}>View Recipe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;