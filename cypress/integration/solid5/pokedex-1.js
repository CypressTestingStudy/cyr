// Creamos el client para la solicitud del api.
class ApiPokemon {
    getInfo(name) {
        fetch(`https://workshop-mongo.herokuapp.com/pokemon/name/${name}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
        });        
    }
}

// Creamos la clase pokedex
class Pokedex {
    #pokemons = []
    constructor(pokemons) {
        this.#pokemons = pokemons;
        /*
            En este punto se a creado a una dependencias especifica
            sin importar el tipo de dependendencia tendriamos que poder
            utilizar el método getInfo
        */
        this.#Api = new ApiPokemon();
    }

    getInfo() {
        this.#pokemons.forEach(pokemon => {
            this.Api.getInfo(pokemon);
        });
    }
}

// creo mi listado de pokemons
const LIST = [
    "Charizar",
    "Eevee",
    "pikachu",
];
// creamos al instancia del pokedex
const POKEDEX = new Pokedex(LIST);
// genero la impeción de la data.
POKEDEX.getInfo();