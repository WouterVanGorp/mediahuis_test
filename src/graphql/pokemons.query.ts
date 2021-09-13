export const POKEMONS_QUERY = `query PokemonFilter($amount: Int) {
    Pokemons(first: $amount) {
        id
        name
    }
  }`;
