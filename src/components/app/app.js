import React, {Component} from 'react';
import './app.css';
import Header from "../header";
import RandomPlanet from "../random-planet";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import PeoplePage from "../people-page";
import ErrorButton from "../error-button";

export default class App extends Component{

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
                <PeoplePage/>
                <PeoplePage/>
            </div>
        );
    }
};
