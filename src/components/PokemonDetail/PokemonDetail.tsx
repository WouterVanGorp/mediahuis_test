import style from './../../App.module.css';
import { PokemonDetail as Pokemon } from "./../../models";
import { PokemonStats, PokemonPhoto } from 'components';

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
      <div>
        <PokemonStats stats={pokemon.stats} />
      </div>
      <div></div>
    </div>
  );
}
