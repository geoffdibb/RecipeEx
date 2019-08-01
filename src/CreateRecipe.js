import React, { Component } from 'react';
import axios from 'axios';

class CreateRecipe extends Component {

  constructor() {
    super();
    this.state = {

    }
  }

  makeRequest = (event) => {

    let newItem = {
      name: event.target[0].value,
      ingredients: event.target[1].value,
      description: event.target[2].value,
      image: event.target[3].value
    }

    console.log(newItem)
    axios
      .post("http://localhost:5000/Recipe/createRecipe", newItem)
      .then(response => {
        this.setState({
          data: response.data
        });
        console.log(response.data);
      }).catch(err => console.log(err));

  }



  render() {
    return (
      <div >

        <h2>Create a Recipe </h2>
        <form onSubmit={this.makeRequest}>

          <br></br>
          <label for="recipeName">Name: </label>
          <input type="text" id="recipeName" name="recipeName" required />
          <br></br>

          <label for="recipeingredients">Ingredients: </label>
          <input type="recipeingredients" id="recipeingredients" name="recipeingredients" required />
          <br></br>

          <label for="recipedescription">Description: </label>
          <input type="recipedescription" id="recipedescription" name="recipedescription" required />
          <br></br>

          <label for="recipeImage">Image?: </label>
          <input type="recipeImage" id="recipeImage" name="recipeImage" />
          <br></br>

          <input type="submit" value="Set Recipe Details" />
          <p id="systemResponse"> </p>
        </form>


      </div>
    );
  }
}

export default CreateRecipe;
