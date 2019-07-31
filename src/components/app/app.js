import React, {Component} from 'react';
import './app.css';
import Header from "../header";
import RandomPlanet from "../random-planet";

import ItemDetails from "../item-details";
import PeoplePage from "../people-page";
import ErrorButton from "../error-button";
import SwapiService from "../../services/swapiService";
import ErrorBoundry from "../error-boundry";
import Row from "../row";
import {Record} from "../item-details/item-details";

export default class App extends Component{

    swapiService = new SwapiService();

    state = {
        showRandomPlanet: true
    }
    toggleRandomPlanet = () => {
        this.setState((state) => {
            return{
                showRandomPlanet: !state.showRandomPlanet
            }
        })
    }
    onItemSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    }
    render(){
        const planet = this.state.showRandomPlanet ?
            <RandomPlanet/> :
            null;

        const{getPerson,
              getStarShip,
              getPlanet,
              getPersonImg,
              getStarShipImg,
              getPlanetImg} = this.swapiService;

        const personDetails = (
            <ItemDetails
                itemId = {12}
                getData={getPerson}
                getImg={getPersonImg}>

                <Record field="gender" label="Gender"/>
                <Record field="eyeColor" label="Eye Color"/>

            </ItemDetails>

        )
        const starShipDetails = (
            <ItemDetails
                itemId = {5}
                getData={getStarShip}
                getImg={getStarShipImg}>

                <Record field="model" label="Model"/>
                <Record field="length" label="Length"/>
                <Record field="passengers" label="Passengers"/>

            </ItemDetails>

        )
        const planetDetails = (
            <ItemDetails
                itemId = {5}
                getData={getPlanet}
                getImg={getPlanetImg}>

                <Record field="name" label="Name"/>
                <Record field="population" label="Population"/>
                <Record field="diameter" label="Diameter"/>
                <Record field="rotationPeriod" label="Rotation Period"/>

            </ItemDetails>
        )


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
                    <ErrorButton/>
                </div>

                {/*<PeoplePage/>*/}

                <Row left = {personDetails}
                     right = {starShipDetails}/>

                <Row left = {planetDetails}
                     right = {null}/>

            </div>
            </ErrorBoundry>
        );
    }
};
