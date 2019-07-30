import React, {Component} from 'react';
import './app.css';
import Header from "../header";
import RandomPlanet from "../random-planet";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import PeoplePage from "../people-page";
import ErrorButton from "../error-button";
import SwapiService from "../../services/swapiService";

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
        return(
            <div>
                <Header />
                {planet}
                <div className="row mb2 button-row">
                    <button className="toggle-planet btn btn-warning btn-lg"
                            onClick={this.toggleRandomPlanet}>
                      Toggle Random Planet
                    </button>
                    <ErrorButton/>
                </div>

                <PeoplePage/>

                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList
                            onItemSelected = {this.onItemSelected}
                            getData={this.swapiService.getAllPlanets}
                            renderItem = {(item) => (<span>{item.name} <button> ! </button></span>)}
                        />
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={this.state.selectedPerson}/>
                    </div>
                </div>

                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList
                            onItemSelected = {this.onItemSelected}
                            getData={this.swapiService.getAllStarShips}
                            renderItem = {(item) => item.name}
                        />
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={this.state.selectedPerson}/>
                    </div>
                </div>


            </div>
        );
    }
};
