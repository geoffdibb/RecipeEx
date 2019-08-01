import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

import Header from "./Header";
import CreateRecipe from "./CreateRecipe";
import RecipeIndex from "./RecipeIndex";
// import ActualRecipe from "./ActualRecipe";
import Home from "./Home";


function App() {
  
  return (
    <Router>
      <div >
                <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: "black", color: "white" }}>Navbar

        <Header></Header>
        </div>
        <button>
          <Link to="/Home">Home</Link>
        </button>
        <button>
          <Link to="/CreateRecipe">Create A Recipe</Link>
        </button>
        <button>
          <Link to="/RecipeIndex">Recipe Index</Link>
        </button>


        <Route path="/Home" component={Home} />
        <Route path="/CreateRecipe" component={CreateRecipe} />
        <Route path="/RecipeIndex" component={RecipeIndex} />

      </div>
    </Router>
  );
}

export default App;
