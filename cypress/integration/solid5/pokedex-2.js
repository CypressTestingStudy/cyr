/*

    Generamos algunos cambios en la clase 
    con los cuales ya no generamos una dependencia
    de algun modulo en especifico sino que solo inyectamo
    la dependencia que utilizaremos.
*/
class Pokedex {
    #pokemons = [];
    #dependencie = nulll;

    constructor(pokemons, dependencie) {
        this.#pokemons = pokemons;
        this.dependencie = dependencie;
    }

    getInfo() {
        this.#pokemons.forEach(pokemon => {
            /*
                Al inyectar la dependenccia solo bastara con utilizar
                el método que requerimos utilizar.
            */
            this.dependencie.getInfo(pokemon);
        });
    }
}


// Creamos el client para la solicitud del api. utilizando fetch
class ApiPokemon1 {
    getInfo(name) {
        fetch(`https://workshop-mongo.herokuapp.com/pokemon/name/${name}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
        });        
    }
}

// Creamos el client para la solicitud del api. desde un json
class ApiPokemon2 {
    getInfo(name) {
        const DATA = require("./Api.json");
        const INFO = DATA[name] || "";
        console.log(INFO);      
    }
}

// creo mi listado de pokemons
const LIST = [
    "Charizar",
    "Eevee",
    "pikachu",
];

const API = new ApiPokemon2(); // o puede ser ApiPokemon1();
// creamos al instancia del pokedex
const POKEDEX = new Pokedex(LIST, API);
// genero la impreción de la data.
POKEDEX.getInfo();