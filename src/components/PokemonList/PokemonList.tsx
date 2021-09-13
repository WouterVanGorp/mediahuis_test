import { PokemonOverview as Pokemon } from "./../../models";
import { PokemonItem } from "./../PokemonItem/PokemonItem";

interface Props {
  pokemons: Pokemon[];
  onClick: (name: string) => void;
}

export function PokemonList({ pokemons, onClick }: Props) {
  return (
    <div>
      {pokemons.length === 0 ? "No pokemons found" : ""}
      {pokemons.map((p) => (
        <PokemonItem onClick={onClick} key={p.id} name={p.name} />
      ))}
    </div>
  );
}
