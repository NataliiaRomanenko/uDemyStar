import React from 'react';
import SwapiService from "../../services/swapiService";
import {Record} from "../item-details/item-details";
import ItemDetails from "../item-details";


const swapiService = new SwapiService();

const {getPerson,
       getPlanet,
       getStarShip,
       getPersonImg,
       getStarShipImg,
       getPlanetImg} = swapiService;


const PersonDetails = ({itemId}) => {
    return(
        <ItemDetails
            itemId = {itemId}
            getData={getPerson}
            getImg={getPersonImg}>
            <Record field="gender" label="Gender"/>
            <Record field="eyeColor" label="Eye Color"/>
        </ItemDetails>
    )
};
const PlanetDetails = ({itemId}) => {
    return(
        <ItemDetails
            itemId = {itemId}
            getData={getPlanet}
            getImg={getPlanetImg}>
            <Record field="name" label="Name"/>
            <Record field="population" label="Population"/>
            <Record field="diameter" label="Diameter"/>
            <Record field="rotationPeriod" label="Rotation Period"/>
        </ItemDetails>
    )
};
const StarShipDetails = ({itemId}) => {
    return(
        <ItemDetails
            itemId = {itemId}
            getData={getStarShip}
            getImg={getStarShipImg}>
            <Record field="model" label="Model"/>
            <Record field="length" label="Length"/>
            <Record field="passengers" label="Passengers"/>

        </ItemDetails>
    )
};
export {
    PersonDetails,
    PlanetDetails,
    StarShipDetails
}
