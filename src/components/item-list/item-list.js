import React, { Component } from 'react';

import './item-list.css';

import Spinner from "../spinner/spinner";
import SwapiService from "../../services/swapiService";
import ErrorIndicator from "../error-indicator";

export default class ItemList extends Component {

    state = {
        itemList: null,
        error: false
    };
    onError = (err) => {
        this.setState({
            error: true,

        })
    };
    componentDidMount() {

        const {getData} = this.props;

        getData()
            .then((itemList) => {
                this.setState({
                    itemList
                });
            });

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

        const { itemList, error } = this.state;
        if (!itemList) {
            return <Spinner />;
        }
        const errorMessage = error ? <ErrorIndicator/> : null;
        const items = this.renderItems(itemList);

        return (
            <ul className="item-list list-group">
                {items}
                {errorMessage}
            </ul>
        );
    }
}
