import React, { Component } from 'react';
import _ from "lodash";
import { Table } from "reactstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { RecipeDetails } from './RecipeDetails';



export class Recipe extends Component {
    render(props) {

        const {
    name
} = this.props

        return (
            <Table dark  style={{ display: 'flex', justifyContent: 'center', backgroundColor: "black", color: "white" }}>
                <tbody>
                    <tr>
                        <td>
                            <button>

                                <Link to={this.props.name}>{this.props.name}</Link>
                            </button>
                        </td>
                    </tr>

                </tbody>
            </Table>
        );
    }
}
export default Recipe;
