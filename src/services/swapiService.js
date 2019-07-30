

export default class SwapiService {
    _apiBase = 'https://swapi.co/api';

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok){
            throw new Error (`Coud not fetch ${url}` `, received ${res.status}`)
        }
        return await res.json();

    }

    getAllPeople = async () => {
        const res = await this.getResource(`/people/`);
        return res.results.map(this._transformPerson);
    }
    getPerson = async (id) => {
        const person = await this.getResource(`/people/${id}`);
        return this._transformPerson(person);
    }
    getAllPlanets = async () => {
        const res = await this.getResource(`/planets/`);
        return res.results.map(this._transformPlanet);
    }
    getPlanet = async (id) => {
        const planet = await this.getResource(`/planets/${id}`);
        return this._transformPlanet(planet);

    }
    getAllStarShips = async () => {
        const res = await this.getResource(`/starships/`);
        return res.results.map(this._transformStarShip);
    }
    getStarShip = async (id) => {
        const starShip = await this.getResource(`/starships/${id}`);
        return this._transformStarShip(starShip);
    }

    _extractId (item){
        const idRegExp = /\/([0-9]*)\/$/;  //получение id из строки url
        return item.url.match(idRegExp)[1];
    }
    _transformPlanet = (planet) =>{
        return{
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    };
    _transformPerson = (person) => {
        return{
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eyeColor
        }
    };
    _transformStarShip = (starShip) => {
        return{
            id: this._extractId(starShip),
            name: starShip.name,
            model: starShip.model,
            manufacturer: starShip.manufacturer,
            costInCredits: starShip.costInCredits,
            lenght: starShip.lenght,
            crew: starShip.crew,
            passengers: starShip.passengers,
            cargoCapacity: starShip.cargoCapacity
        }
    };
}


