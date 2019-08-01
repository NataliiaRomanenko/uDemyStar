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

const withChildFunction = (Wrapped, fn) => {
    return(props)=>{
        return(
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    }
};
const renderName = ({name})=><span>{name}</span>;
const renderModalName = ({name, model})=> <span>{name} ({model})</span>;

    console.log(renderModalName);

const PersonList = withData (
                            withChildFunction(ItemList, renderName),
                            getAllPeople);
const PlanetList = withData(
                            withChildFunction(ItemList, renderName),
                            getAllPlanets);
const StarShipList = withData(
                            withChildFunction(ItemList, renderModalName),
                            getAllStarShips);
export {
    PersonList,
    PlanetList,
    StarShipList
}

