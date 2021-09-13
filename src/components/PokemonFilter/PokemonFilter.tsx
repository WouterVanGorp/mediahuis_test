import { PokemonList } from "components";
import { useQuery } from "graphql-hooks";
import { PokemonOverview } from "models";

export function PokemonFilter() {
  const POKEMONS_QUERY = `query PokemonFilter($amount: Int) {
        Pokemons(first: $amount) {
            id
            name
        }
      }`;

  const { loading, error, data } = useQuery<{ Pokemons: PokemonOverview[] }>(
    POKEMONS_QUERY,
    {
      variables: {
        amount: 151,
      },
    }
  );

  return (
    <div>
      <input type="text" />
      {loading || error ? (
        loading ? (
          <div>Loading...</div>
        ) : (
          <div>Something went wrong, try again later.</div>
        )
      ) : (
        <PokemonList pokemons={data?.Pokemons ?? []} />
      )}
    </div>
  );
}
