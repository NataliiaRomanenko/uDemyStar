import React, {Component} from 'react';
import './people-page.css';
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapiService";
import Row from "../row";
import ErrorBoundry from "../error-boundry";



export default class PeoplePage extends Component{

    swapiService = new SwapiService();

    state = {
        selectedPerson: 5,

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
            getData = {this.swapiService.getAllPeople}>

                {(item) => (
                    `${item.name}, (${item.birthYear})`
                )}

            </ItemList>
        )
        const personDetails = (
            <ErrorBoundry>
            <PersonDetails personId={this.state.selectedPerson}/>
            </ErrorBoundry>
        )
        return(

            <Row left={itemList} right={personDetails}/>


        )
    }
}
