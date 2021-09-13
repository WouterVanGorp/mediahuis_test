import { PokemonOverview as Pokemon } from "./../../models";
import { PokemonItem } from "./../PokemonItem/PokemonItem";

import style from './PokemonList.module.css';

interface Props {
  pokemons: Pokemon[];
  onClick: (name: string) => void;
}

export function PokemonList({ pokemons, onClick }: Props) {
  return (
    <div className={style.root}>
      {pokemons.length === 0 ? "No pokemons found" : ""}
      {pokemons.map((p) => (
        <PokemonItem onClick={onClick} key={p.id} name={p.name} />
      ))}
    </div>
  );
}
