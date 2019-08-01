import React, { Component } from 'react';
import Recipe from "./Recipe";
import axios from 'axios';


export default class RecipeIndex extends Component {

    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    getall = () => {

        axios
            .get("http://localhost:5000/Recipe/all")
            .then(response => {
                this.setState({
                    data: response.data
                });
                console.log(response.data);
            }).catch(err => console.log(err));
    };

    componentDidMount() {
        this.getall();
    }

    render() {
        return (
            <div >
                <h2>List of Recipes </h2>

                <table >

                    <tbody><tr><th>Recipes</th>
                    </tr>{(this.state.data).map((item) =>
                        (<Recipe viewall={this.props.viewall}
                            name={item.name} ingredients={item.ingredients} description={item.description} image={item.image} _id={item._id} getall={this.getall}
                        ></Recipe>))}

                    </tbody>

                </table>
            </div>


        );
    }
}
