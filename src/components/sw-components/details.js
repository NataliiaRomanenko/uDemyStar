import React from 'react';
import {Record} from "../item-details/item-details";
import ItemDetails from "../item-details";
import {SwapiServiceConsumer} from '../swapi-service-context'
import BackBtn from "../back-btn";


const PersonDetails = ({itemId}) => {
    return(
        <SwapiServiceConsumer>
            {
                ({getPerson, getPersonImg}) => {
                    return(
                        <ItemDetails
                            itemId = {itemId}
                            getData={getPerson}
                            getImg={getPersonImg}>
                            <Record field="gender" label="Gender"/>
                            <Record field="eyeColor" label="Eye Color"/>
                        </ItemDetails>
                    )
                }
            }
        </SwapiServiceConsumer>
    )
};
const PlanetDetails = ({itemId}) => {
    return(
        <SwapiServiceConsumer>
            {
                ({getPlanet, getPlanetImg}) => {
                    return (
                        <ItemDetails
                            itemId={itemId}
                            getData={getPlanet}
                            getImg={getPlanetImg}>
                            <Record field="name" label="Name"/>
                            <Record field="population" label="Population"/>
                            <Record field="diameter" label="Diameter"/>
                            <Record field="rotationPeriod" label="Rotation Period"/>
                        </ItemDetails>
                    )
                }
            }
        </SwapiServiceConsumer>
    )
};
const StarShipDetails = ({itemId, history, url}) => {
    console.log(history);
    return(
    <SwapiServiceConsumer>
        {
            ({getStarship, getStarShipImg}) => {
                return(
                    <React.Fragment>

                        <BackBtn history={history} url={url}/>
                    <ItemDetails
                        itemId = {itemId}
                        getData={getStarship}
                        getImg={getStarShipImg}>
                        <Record field="model" label="Model"/>
                        <Record field="length" label="Length"/>
                        <Record field="passengers" label="Passengers"/>

                    </ItemDetails>
                    </React.Fragment>
                )
            }
        }

    </SwapiServiceConsumer>
    )
};
export {
    PersonDetails,
    PlanetDetails,
    StarShipDetails
}
