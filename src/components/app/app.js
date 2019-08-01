import React, {Component} from 'react';
import './app.css';
import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorButton from "../error-button";
import ErrorBoundry from "../error-boundry";
import Row from "../row";
import {PersonDetails, PersonList, PlanetDetails, PlanetList, StarShipDetails, StarShipList} from "../sw-components";

export default class App extends Component{

    state = {
        selectedPerson: null,
        showRandomPlanet: true
    };

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return{
                showRandomPlanet: !state.showRandomPlanet
            }
        })
    };

    onItemSelected = (id) => {
        this.setState({
            selectedPerson: id
        })


    };

    render(){
        console.log("selectedPerson:", this.state.selectedPerson);
        const planet = this.state.showRandomPlanet ?
            <RandomPlanet/> :
            null;

        const personList = (
            <PersonList onItemSelected = {this.onItemSelected}>
                { ({name}) => <span>{name}</span> }
            </PersonList>
        );
        const planetList = (
            <PlanetList onItemSelected = {this.onItemSelected}>
                { ({name}) => <span>{name}</span> }
            </PlanetList>
        );
        const starShipList = (
            <StarShipList onItemSelected = {this.onItemSelected}>
                { ({name}) => <span>{name}</span> }
            </StarShipList>
        );
        const personDetails = <PersonDetails itemId={11}/>;
        const starShipDetails =  <StarShipDetails itemId={5}/>;
        const planetDetails = <PlanetDetails itemId={9}/>;


        return(
            <ErrorBoundry>
                <div className="container">
                <Header />
                {planet}
                <div className="row mb2 button-row">
                    <button className="toggle-planet btn btn-warning btn-lg"
                            onClick={this.toggleRandomPlanet}>
                      Toggle Random Planet
                    </button>

                </div>

                <Row left = {personList}
                     right ={personDetails}/>

                <Row left = {planetList}
                     right = {planetDetails}/>

                <Row left = {starShipList}
                     right = {starShipDetails}/>

            </div>
            </ErrorBoundry>
        );
    }
};
