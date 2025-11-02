const API_BASE_URL = 'http://localhost:5000/api';

// Helper function to get auth headers
const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    'Content-Type': 'application/json',
    'Authorization': token ? `Bearer ${token}` : ''
  };
};

// Auth API calls
export const authAPI = {
  async register(userData) {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Registration failed');
      }

      return data;
    } catch (error) {
      console.error('Registration API error:', error);
      throw error;
    }
  },

  async login(credentials) {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Login failed');
      }

      return data;
    } catch (error) {
      console.error('Login API error:', error);
      throw error;
    }
  },

  async getCurrentUser() {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/me`, {
        headers: getAuthHeaders(),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to get user data');
      }

      return data;
    } catch (error) {
      console.error('Get current user API error:', error);
      throw error;
    }
  },
};

// Favorites API calls
export const favoritesAPI = {
  async getFavorites() {
    try {
      const response = await fetch(`${API_BASE_URL}/favorites`, {
        headers: getAuthHeaders(),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch favorites');
      }

      return response.json();
    } catch (error) {
      console.error('Get favorites API error:', error);
      throw error;
    }
  },

  async addFavorite(recipe) {
    try {
      const userId = localStorage.getItem('userId');
      const favoriteData = {
        id: Date.now(),
        userId: parseInt(userId),
        recipeId: recipe.id,
        recipe: recipe,
        savedDate: new Date().toISOString()
      };

      const response = await fetch(`${API_BASE_URL}/favorites`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify(favoriteData),
      });

      if (!response.ok) {
        throw new Error('Failed to add favorite');
      }

      return response.json();
    } catch (error) {
      console.error('Add favorite API error:', error);
      throw error;
    }
  },

  async removeFavorite(recipeId) {
    try {
      const userId = localStorage.getItem('userId');
      
      // First, get the favorite entry to delete
      const favoritesResponse = await fetch(`${API_BASE_URL}/favorites?userId=${userId}&recipeId=${recipeId}`, {
        headers: getAuthHeaders(),
      });

      if (!favoritesResponse.ok) {
        throw new Error('Failed to fetch favorites');
      }

      const favorites = await favoritesResponse.json();
      
      if (favorites.length === 0) {
        throw new Error('Favorite not found');
      }

      const favoriteId = favorites[0].id;
      
      const response = await fetch(`${API_BASE_URL}/favorites/${favoriteId}`, {
        method: 'DELETE',
        headers: getAuthHeaders(),
      });

      if (!response.ok) {
        throw new Error('Failed to remove favorite');
      }

      return { message: 'Favorite removed' };
    } catch (error) {
      console.error('Remove favorite API error:', error);
      throw error;
    }
  },
};