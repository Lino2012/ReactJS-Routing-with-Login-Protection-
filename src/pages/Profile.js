import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { useFavorites } from '../App';
import './Profile.css';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState('profile');
  const { favorites, removeFromFavorites } = useFavorites();
  const navigate = useNavigate();

  useEffect(() => {
    const username = localStorage.getItem('username');
    const userId = localStorage.getItem('userId');
    
    if (!username) {
      navigate('/login');
      return;
    }

    // Mock user data
    const userData = {
      username: username,
      email: username === 'chef' ? 'chef@secret-ingredient.com' : `${username}@example.com`,
      joinDate: '2023-01-15',
      bio: 'Passionate home chef exploring the world of flavors and secret ingredients!',
      favoriteCuisine: 'Italian & Asian Fusion',
      cookingLevel: 'Intermediate',
      recipesTried: favorites.length + 7,
      recipesCreated: 3
    };

    setUser(userData);
  }, [favorites, navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('username');
    localStorage.removeItem('userId');
    navigate('/');
  };

  const handleRemoveFavorite = (recipeId) => {
    removeFromFavorites(recipeId);
  };

  if (!user) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="profile-page">
      <Header />
      
      <div className="profile-hero">
        <div className="profile-header">
          <div className="profile-avatar">
            {user.username.charAt(0).toUpperCase()}
          </div>
          <div className="profile-info">
            <h1>Chef {user.username}</h1>
            <p className="profile-bio">{user.bio}</p>
            <div className="profile-stats">
              <div className="stat">
                <span className="stat-number">{favorites.length}</span>
                <span className="stat-label">Saved Recipes</span>
              </div>
              <div className="stat">
                <span className="stat-number">{user.recipesTried}</span>
                <span className="stat-label">Recipes Tried</span>
              </div>
              <div className="stat">
                <span className="stat-number">{user.recipesCreated}</span>
                <span className="stat-label">Recipes Created</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="profile-content">
        <div className="profile-tabs">
          <button 
            className={`tab-button ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            Profile Info
          </button>
          <button 
            className={`tab-button ${activeTab === 'favorites' ? 'active' : ''}`}
            onClick={() => setActiveTab('favorites')}
          >
            Favorites ({favorites.length})
          </button>
          <button 
            className={`tab-button ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            Settings
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'profile' && (
            <div className="profile-details">
              <div className="detail-card">
                <h3>About Me</h3>
                <div className="detail-item">
                  <span className="detail-label">Username:</span>
                  <span className="detail-value">{user.username}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Email:</span>
                  <span className="detail-value">{user.email}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Member Since:</span>
                  <span className="detail-value">{new Date(user.joinDate).toLocaleDateString()}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Favorite Cuisine:</span>
                  <span className="detail-value">{user.favoriteCuisine}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Cooking Level:</span>
                  <span className="detail-value">{user.cookingLevel}</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'favorites' && (
            <div className="favorites-section">
              <h3>My Favorite Recipes</h3>
              {favorites.length === 0 ? (
                <div className="empty-state">
                  <h3>No favorites yet!</h3>
                  <p>Start exploring recipes and save your favorites here.</p>
                  <button 
                    className="explore-button"
                    onClick={() => navigate('/dashboard')}
                  >
                    Explore Recipes
                  </button>
                </div>
              ) : (
                <div className="favorites-grid">
                  {favorites.map(recipe => (
                    <div key={recipe.id} className="favorite-card">
                      <img src={recipe.image} alt={recipe.title} />
                      <div className="favorite-info">
                        <h4>{recipe.title}</h4>
                        <div className="favorite-meta">
                          <span>⭐ {recipe.rating}</span>
                          <span>Saved: {new Date(recipe.savedDate).toLocaleDateString()}</span>
                        </div>
                        <div className="favorite-actions">
                          <button 
                            className="view-recipe-button"
                            onClick={() => navigate(`/recipe/${recipe.id}`)}
                          >
                            View Recipe
                          </button>
                          <button 
                            className="remove-favorite-button"
                            onClick={() => handleRemoveFavorite(recipe.id)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="settings-section">
              <div className="setting-card">
                <h3>Account Settings</h3>
                <div className="setting-item">
                  <label>Email Notifications</label>
                  <input type="checkbox" defaultChecked />
                </div>
                <div className="setting-item">
                  <label>Weekly Recipe Suggestions</label>
                  <input type="checkbox" defaultChecked />
                </div>
                <div className="setting-item">
                  <label>Cooking Tips & Tricks</label>
                  <input type="checkbox" defaultChecked />
                </div>
              </div>
              
              <div className="danger-zone">
                <h3>Danger Zone</h3>
                <button className="danger-button" onClick={handleLogout}>
                  Logout
                </button>
                <button className="danger-button delete">
                  Delete Account
                </button>
                <p className="warning-text">
                  Deleting your account will permanently remove all your data including favorites.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;