import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
import CreateRecipe from "./CreateRecipe";
import RecipeIndex from "./RecipeIndex";
import Home from "./Home";
import RecipeDetails from "./RecipeDetails";

export class Header extends Component {

  constructor() {
    super();
    this.state = {
      data: []
    };
  }


  onLoad = () => {
    axios
      .get("http://localhost:5000/recipe/all")
      .then(response => {
        this.setState({
          data: response.data

        });
      })

  }

  componentDidMount() {
    this.onLoad();

  }

  render() {
    return (
    
      <div>
          <h1 backgroundcolor = "black">Recipe Manager 2019
        </h1>
        <Router>
          <button>
         <Link to="/Home">Home</Link>
            </button>
            <button>
           <Link to="/create">Create Recipes</Link>
            </button>
            <button>
           <Link to="/RecipeIndex">View All Recipes</Link>
            </button>
                    <Route path="/Home" render={(props) => <Home passedFunction={this.onLoad} dataSent={this.state.data} />} />

          <Route path="/create" render={(props) => <CreateRecipe passedFunction={this.onLoad} dataSent={this.state.data} />} />
          <Route path="/RecipeIndex" render={(props) => <RecipeIndex passedFunction={this.onLoad} dataSent={this.state.data} />} />

          <Route exact path="/" render={(props) => <RecipeIndex passedFunction={this.onLoad} dataSent={this.state.data} />} />


          {this.state.data.map((item) => (

            <Route path={"/" + item.name} render={(props) => <RecipeDetails passedFunction={this.onLoad}
              description={item.description}
              ingredients={item.ingredients}
              name={item.name}
              image={item.image}
              _id={item._id} />} />

          ))}
        </Router>
      </div>
    )
  }
}
export default Header;