import React, {Component} from 'react';
import './people-page.css';
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapiService";
import Row from "../row";


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
        const itemList =  (
            <ItemList
            onItemSelected = {this.onItemSelected}
            getData = {this.swapiService.getAllPeople}
            renderItem = {(item) => `${item.name}, (${item.gender}, ${item.birthYear})`}
        />
        )
        const personDetails = (
            <PersonDetails personId={this.state.selectedPerson}/>
        )
        return(
            <Row left={itemList} right={personDetails}/>

        )
    }
}
