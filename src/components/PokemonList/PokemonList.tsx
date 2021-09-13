import { PokemonOverview as Pokemon } from "./../../models";
import { PokemonItem } from "./../PokemonItem/PokemonItem";

interface Props {
  pokemons: Pokemon[];
}

export function PokemonList({ pokemons }: Props) {
  return (
    <div>
      {pokemons.length === 0 ? "No pokemons found" : ""}
      {pokemons.map((p) => (
        <PokemonItem key={p.id} name={p.name} />
      ))}
    </div>
  );
}
