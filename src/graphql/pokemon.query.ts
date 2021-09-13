export const POKEMON_QUERY = `query PokemonDetails($name: String!) {
    Pokemon(name: $name) {
        id
        name
        image
        abilities {
          name
        }
        stats {
          name
          value
        }
        types {
          name
        }
      }
  }`;
