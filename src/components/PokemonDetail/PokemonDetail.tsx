import style from './../../App.module.css';
import { PokemonDetail as Pokemon } from "./../../models";
import { PokemonStats, PokemonPhoto } from 'components';
import { useEffect, useState } from 'react';

interface Props {
  pokemon: Pokemon;
  onSavePokemon: (pokemon: Pokemon) => void;
}

export function PokemonDetail({ pokemon, onSavePokemon }: Props) {

  const [pokeState, setPokemon] = useState(pokemon);

  useEffect(() => {
    setPokemon(pokemon);
  }, [pokemon])

  // changes op de moves gaan we via setPokemon doen
  // Op een save kunne we dan onze 'local' pokemon naar boven gooien

  return (
    <div className={style.flexRow}>
      <div>
          <PokemonPhoto name={pokeState.name} img={pokeState.image} />
          <button onClick={() => onSavePokemon(pokeState)} >SAVE POKEMON</button>
      </div>
      <div>
        <PokemonStats stats={pokeState.stats} />
      </div>
      <div></div>
    </div>
  );
}
