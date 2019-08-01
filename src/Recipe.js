import React, { Component } from 'react';
import { Table } from 'reactstrap';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import RecipeDetails from "./RecipeDetails";

class Recipe extends Component {

    constructor() {
        super();
        this.state = {
            deetname: "",
            deetingredients: "",
            deetdescription: "",
            deetimage: "",
            _id: ""
        }
    }

    showinfo = (event) => {
        this.setState({
            deetname: this.props.name,
            deetingredients: this.props.ingredients,
            deetdescription: this.props.description,
            deetimage: this.props.image,
            deet_id: this.props._id
        });

    };





    render() {

        return (

            <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: "white" }}>


                <Table dark >

                    <tbody><tr></tr>
                        <tr>
                            <td>{this.props.name}
                            </td>
                        </tr>


                        <Router>
                            <button onClick={this.showinfo}>
                                <Link to="/props">Recipe Details</Link>
                            </button>

                            <Route path="/props" render={() => <RecipeDetails name={this.state.deetname} ingredients={this.state.deetingredients} description={this.state.deetdescription} image={this.state.deetimage} _id={this.state.deet_id} getall={this.props.getall}/>} />

                        </Router>


                    </tbody>

                </Table>

            </div>

        )
    }
}

export default Recipe;
