class Pokemon {
    #name = ""; 
    #type = ""

    constructor(name, type) {
        this.#name = name;
        this.#type = type;
    }

   get name() {
       return this.#name;
   }

   get type() {
       return this.#type;
   }

}

/*
   Se genera una clase para procesar los ataques de
   los pokemons dependiento del tipo de este.
*/
class ProcessAttack {
   /*
       Se crea método que permite procesar los ataques 
       de un listado de pokemons.
   */
   allPokemonAttack(pokemonList) {
       const ATTACKS = pokemonList.reduce((output, pokemon) => {
           let attack = "";
           const { name, type } = pokemon;
           /*
               Se crea un listado de casos que permite asignar
               un ataque dependiendo el tipo de pokemon.
           */
           switch(type) {
               case "Electric":
                   attack = "Impactrueno ⚡️";
                   break;
               case "Fire": 
                   attack = "Aliento igneo 🔥";
                   break;
               case "Water":
                   attack = "Pitsola de agua 🔫";
                   break;
                   attack = "Ataque base";
                default:
           }
           return `${output}${name}, ${attack}\n`;
       }, "");
       return ATTACKS;
   }
}
// Se crean instancias de la clase pokemon
const flareon = new Pokemon("Flareon", "Fire"); 
const jolteon = new Pokemon("Jolteon", "Electric");
const vaporeon = new Pokemon("Vaporeon", "Water");

// Creamos una instancia de la clase ProcessAttack 
const Attack = new ProcessAttack()
// invocamos al método allPokemonAttack y enviamos las 
// instancia de la clase pokemon
const MSG = Attack.allPokemonAttack([flareon, jolteon, vaporeon]);
console.log(MSG);
/*
   Salida 
   Flareon, Aliento igneo 🔥
   Jolteon, Impactrueno ⚡️
   Vaporeon, Pitsola de agua 🔫
*/