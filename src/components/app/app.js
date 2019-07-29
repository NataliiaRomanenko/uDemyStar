import React, {Component} from 'react';
import './app.css';
import Header from "../header";
import RandomPlanet from "../random-planet";
import ItemList from "../item-list";
import PersonDetails from "../person-details";

export default class App extends Component{

    state = {
        selectedPerson: 5,
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
                </div>

                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList onItemSelected = {this.onItemSelected} />
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={this.state.selectedPerson}/>
                    </div>
                </div>
            </div>
        );
    }
};
