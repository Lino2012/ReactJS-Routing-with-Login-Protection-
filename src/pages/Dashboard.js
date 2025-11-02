import React, { useState } from 'react';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
import QuickActions from '../components/QuickActions';
import './Dashboard.css';

const Dashboard = () => {
  const username = localStorage.getItem('username') || 'Chef';
  const [searchTerm, setSearchTerm] = useState('');
  
  const featuredRecipes = [
    {
      id: 1,
      title: "Secret Veggie Stir-Fry",
      description: "A quick, healthy meal with a hidden spice twist. Ready in 20 minutes!",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      rating: "4.8"
    },
    {
      id: 2,
      title: "Molten Chocolate Secret",
      description: "Indulge in gooey chocolate bliss with our pro baker's tip.",
      image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      rating: "4.9"
    },
    {
      id: 3,
      title: "Hidden Herb Pasta",
      description: "Creamy sauce with a secret ingredient that elevates the flavor.",
      image: "https://images.unsplash.com/photo-1598866594230-a7c12756260f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      rating: "4.7"
    },
    {
      id: 4,
      title: "Magic Morning Pancakes",
      description: "Fluffy pancakes with a secret ingredient for perfect texture every time.",
      image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      rating: "4.6"
    },
    {
      id: 5,
      title: "Secret Spice Burger",
      description: "Juicy burger with a hidden spice blend that will amaze your guests.",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      rating: "4.8"
    },
    {
      id: 6,
      title: "Mystery Fruit Smoothie",
      description: "Refreshing smoothie with a secret ingredient for extra creaminess.",
      image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      rating: "4.5"
    }
  ];

  const filteredRecipes = featuredRecipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    recipe.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="dashboard">
      <Header />
      
      <section className="hero">
        <div className="hero-content">
          <h2>Dashboard</h2>
          <p className="welcome-user">
            Welcome back, Chef {username}! Let's cook up something amazing today.
          </p>
        </div>
      </section>

      <main className="main-content">
        <section className="search-bar">
          <input 
            type="text" 
            placeholder="Search for recipes, ingredients, or secrets..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={(e) => e.target.placeholder = ''}
            onBlur={(e) => e.target.placeholder = 'Search for recipes, ingredients, or secrets...'}
          />
        </section>

        <section className="section">
          <h2>Featured Recipes</h2>
          <div className="recipes-grid">
            {filteredRecipes.map(recipe => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
          {filteredRecipes.length === 0 && (
            <div className="no-results">
              <p>No recipes found matching your search. Try different keywords!</p>
            </div>
          )}
        </section>

        <section className="section">
          <h2>Quick Actions</h2>
          <QuickActions />
        </section>
      </main>

      <footer>
        <p>&copy; 2023 The Secret Ingredient. All rights reserved. Made with ❤️ for food lovers.</p>
      </footer>
    </div>
  );
};

export default Dashboard;