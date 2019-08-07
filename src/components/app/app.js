import React, {Component} from 'react';
import './app.css';
import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorBoundry from "../error-boundry";
import {SwapiServiceProvider} from "../swapi-service-context"
import SwapiService from "../../services/swapiService";
import {BrowserRouter as Router, Route} from "react-router-dom";
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages';
import {StarShipDetails} from '../sw-components'
import {Breadcrumbs} from "../breadcrumbs";

export default class App extends Component{


    swapiService = new SwapiService();
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

        return(
            <ErrorBoundry>
                <SwapiServiceProvider value = {this.swapiService}>
                    <Router>
                    <div className="container">
                        <Header />
                        <div className="breadcrumbs">
                            <Route path='/:path/' component={Breadcrumbs} />
                        </div>

                        {planet}

                        <div className="row mb2 button-row">
                            <button className="toggle-planet btn btn-warning btn-lg"
                                    onClick={this.toggleRandomPlanet}>
                              Toggle Random Planet
                            </button>

                        </div>
                        <Route exact path="/" render={() => <h2>Wellcome to StarDB</h2>} />
                        <Route path="/people/" component={PeoplePage} />
                        <Route path="/planets/" component={PlanetsPage} />
                        <Route exact path="/starships/" component={StarshipsPage} />
                        <Route path="/starships/:id"
                               render={({match, location, history}) => {
                                   const {id} = match.params;
                                   const historyLink = history;
                                   // const urlName = /\/([a-z]*)/;
                                   // const url = match.url.match(urlName)[1];
                                   const url = match.url.split('/')[1];
                                   return <StarShipDetails itemId={id} history={historyLink} url={url}/>
                                    }
                               } />
                    </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
};



