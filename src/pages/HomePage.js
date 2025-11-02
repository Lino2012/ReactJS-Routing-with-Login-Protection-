import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <header>
        <h1>The Secret Ingredient</h1>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h2>Unlock the Magic in Every Meal</h2>
          <p>Discover hidden recipes, secret tips, and flavors that will transform your cooking. Your ultimate recipe book awaits!</p>
          <a href="#about" className="cta-button">Explore Recipes</a>
          <Link to="/signup" className="cta-button">Get Started</Link>
        </div>
      </section>

      <section id="about" className="about">
        <h2>About The Secret Ingredient</h2>
        <p>Welcome to The Secret Ingredient, the app that reveals the hidden gems of culinary world. Whether you're a beginner or a seasoned chef, our collection of recipes, ingredient guides, and cooking hacks will inspire your next masterpiece. Dive into a world of delicious possibilities!</p>
        
        <div className="features">
          <div className="feature">
            <img src="https://tse1.mm.bing.net/th/id/OIP.rmmthnVMbfA8LebIhuu41wHaE8?pid=Api&P=0&h=180" alt="Fresh Ingredients" />
            <h3>Ingredient Secrets</h3>
            <p>Learn the best substitutes and pairings for every dish.</p>
          </div>
          <div className="feature">
            <img src="https://uniquekiosk.com/wp-content/uploads/2023/09/jpc7ejj7zyd2mpix62-1024x682.png" alt="Baked Goods" />
            <h3>Easy Recipes</h3>
            <p>Step-by-step guides for meals that wow without the stress.</p>
          </div>
          <div className="feature">
            <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Gourmet Dish" />
            <h3>Pro Tips</h3>
            <p>Unlock chef-level techniques with our exclusive secrets.</p>
          </div>
        </div>
      </section>

      <section className="auth-section">
        <h2 id="login">Ready to Join the Flavor Revolution?</h2>
        <div className="auth-buttons">
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
        <p style={{marginTop: '20px', fontSize: '0.9em', color: '#555'}}>
          Create an account to save your favorites and access premium recipes.
        </p>
      </section>

      <footer>
        <p>&copy; 2023 The Secret Ingredient. All rights reserved. Made with ❤️ for food lovers.</p>
      </footer>
    </div>
  );
};

export default HomePage;