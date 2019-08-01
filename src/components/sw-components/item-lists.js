import React from 'react';
import SwapiService from "../../services/swapiService";
import {withData} from "../hoc-helpers";
import ItemList from "../item-list";


const swapiService = new SwapiService();

const {
    getAllPeople,
    getAllPlanets,
    getAllStarShips
} = swapiService;


const PersonList = withData (ItemList, getAllPeople);
const PlanetList = withData(ItemList, getAllPlanets);
const StarShipList = withData(ItemList, getAllStarShips)
export {
    PersonList,
    PlanetList,
    StarShipList
}

