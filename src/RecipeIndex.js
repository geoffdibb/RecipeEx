import React, { Component } from 'react';
import Recipe from "./Recipe";
import axios from 'axios';
import { Table } from 'reactstrap';


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


    render(props) {
        return (
            <div class="formDiv">
                <div id="random"> </div>
                <h2>Recipes</h2>
                <Table>
                        {this.props.dataSent.map((item) => (

                                 <Recipe passedFunction={this.props.passedFunction} name={item.name} description={item.description} ingredients={item.ingredients} image={item.image}/>       

                        ))}
                </Table>
            </div>

        );
    }
}

