import { PokemonOverview as Pokemon } from "models";
import { PokemonList } from "components";
import { APIError } from "graphql-hooks";

interface Props {
    error: APIError<object> | undefined;
    loading: boolean;
    pokemons: Pokemon[];
    onPokemonClick: (name: string) => void;

    filter: string;
    setFilter: (value: string) => void;

}

export function PokemonFilter({error, loading, pokemons, onPokemonClick, filter, setFilter}: Props) {
  return (
    <div>
      <input
        placeholder="TYPE TO FILTER"
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      {loading || error ? (
        loading ? (
          <div>Loading...</div>
        ) : (
          <div>Something went wrong, try again later.</div>
        )
      ) : (
        <PokemonList pokemons={pokemons} onClick={onPokemonClick} />
      )}
    </div>
  );
}
