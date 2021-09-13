import style from './../../App.module.css';
import { PokemonDetail as Pokemon } from "./../../models";
import { PokemonPhoto } from "components/PokemonPhoto/PokemonPhoto";

interface Props {
  pokemon: Pokemon;
  onSavePokemon: (pokemon: Pokemon) => void;
}

export function PokemonDetail({ pokemon, onSavePokemon }: Props) {
  return (
    <div className={style.flexRow}>
      <div>
          <PokemonPhoto name={pokemon.name} img={pokemon.image} />
      </div>
      <div></div>
      <div></div>
    </div>
  );
}
