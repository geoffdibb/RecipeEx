import React, { Component } from 'react';
import { Table } from 'reactstrap';
import axios from 'axios';


class RecipeDetails extends Component {



    delete = (event) => {


        let newItem = {
            _id: this.props._id,
        }

       

        axios
            .delete("http://localhost:5000/Recipe/deleteRecipe", { data: newItem })
            .then(response => {
                this.props.getall()
                console.log(response.data);
            }).catch(err => console.log(err));
    };

    render() {

        return (

            <p>
                {this.props.name}
                <br />
                {this.props.ingredients}
                <br />
                {this.props.description}
                <br />
                <img src={this.props.image}></img>

                <br/>
                <button onClick={this.delete}>Delete
    </button>
                {console.log(this.props.name)}
            </p>


        )
    }
}

export default RecipeDetails;
