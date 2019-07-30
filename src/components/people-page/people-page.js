import React, {Component} from 'react';
import './people-page.css';
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapiService";

export default class PeoplePage extends Component{

    swapiService = new SwapiService();

    state = {
        selectedPerson: 5,
        hasError: false
    }
    componentDidCatch() {
        this.setState({
            hasError: true
        })
    }

    onItemSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    }

    render() {
        if(this.state.hasError){
            return <ErrorIndicator/>
        }
        return(
            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList
                        onItemSelected = {this.onItemSelected}
                        getData = {this.swapiService.getAllPeople}
                    />
                </div>
                <div className="col-md-6">
                    <PersonDetails personId={this.state.selectedPerson}/>
                </div>
            </div>
        )
    }
}
