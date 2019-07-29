import React, { Component } from 'react';

import './item-list.css';

import Spinner from "../spinner/spinner";
import SwapiService from "../../services/swapiService";
import ErrorIndicator from "../error-indicator";

export default class ItemList extends Component {

    swapiService = new SwapiService();

    state = {
        peopleList: null,
        error: false
    };
    onError = (err) => {
        this.setState({
            error: true,

        })
    };
    componentDidMount() {
        this.swapiService.getAllPeople()
            .then((peopleList) => {
                this.setState({
                    peopleList
                });
            })
            .catch(this.onError);
    }

    renderItems(arr) {
        return arr.map(({id, name}) => {
            return (
                <li className="list-group-item"
                    key={id}
                    onClick={() => this.props.onItemSelected(id)}>
                    {name}
                </li>
            );
        });
    }

    render() {

        const { peopleList, error } = this.state;
        if (!peopleList) {
            return <Spinner />;
        }
        const errorMessage = error ? <ErrorIndicator/> : null;
        const items = this.renderItems(peopleList);

        return (
            <ul className="item-list list-group">
                {items}
                {errorMessage}
            </ul>
        );
    }
}
