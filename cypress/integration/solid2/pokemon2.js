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

   /*
       Cargamos el metodo attack para que todas 
       las clases que hereden de pokemon puedan utilizarlo
   */
   get attack() {
       const { name } = this;
       return `${name}, Ataque base`;
   }

}

/*
   Por cada tipo de pokemon crearemos una nueva clase
   la cual heredara de la clase pokemon
*/
class TypeElectric extends Pokemon {
   constructor(name) {
       /*
           Invocamos el constructor de la clase pokemon
           y pasamos por defecto el tipo Electric
       */
       super(name, "Electric");
   }

   get attack() {
       const { name } = this;
       return `${name}, Impactrueno ⚡️`;
   }
}

class TypeFire extends Pokemon {
   constructor(name) {
       /*
           Invocamos el constructor de la clase pokemon
           y pasamos por defecto el tipo Fire
       */
       super(name, "Fire");
   }

   get attack() {
       const { name } = this;
       return `${name}, Aliento igneo 🔥`;
   }
}

class TypeWater extends Pokemon {
   constructor(name) {
       /*
           Invocamos el constructor de la clase pokemon
           y pasamos por defecto el tipo Water
       */
       super(name, "Water");
   }

   get attack() {
       const { name } = this;
       return `${name}, Pitsola de agua 🔫`;
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
       /*
           En este caso solo basta con recibir el listado de pokemons
           para porder ejecutar un ataque, ya que cada elemento del listado
           cuenta con su propio ataque.
       */
       const ATTACKS = pokemonList.reduce((output, pokemon) => {
           let msg = "";
           const { attack } = pokemon;
           return `${output}${attack}\n`;
       }, "");
       return ATTACKS;
   }
}

// Creamos una instancia de la clase ProcessAttack 
const Attack = new ProcessAttack()

// invocamos al método allPokemonAttack y enviamos las 
// instancia te cada tipo de pokemon
const MSG = Attack.allPokemonAttack([
   new TypeFire("Flareon"),
   new TypeElectric("Jolteon"),
   new TypeWater("Vaporeon"),
   new TypeElectric("Pikachu")
]);
console.log(MSG);
/*
   Salida 
   Flareon, Aliento igneo 🔥
   Jolteon, Impactrueno ⚡️
   Vaporeon, Pitsola de agua 🔫
*/