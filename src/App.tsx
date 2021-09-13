import { useEffect, useState } from "react";
import { useManualQuery, useQuery } from "graphql-hooks";

import style from "./App.module.css";

import { PokemonOverview, PokemonDetail as PokeDetail } from "models";
import { POKEMONS_QUERY, POKEMON_QUERY } from "./graphql";
import { Logo, Container, PokemonFilter, PokemonDetail } from "./components";

export default function App() {
  const [filter, setFilter] = useState<string>("");
  const [filterList, setFilterList] = useState<PokemonOverview[]>([]);

  const { loading, error, data } = useQuery<{ Pokemons: PokemonOverview[] }>(
    POKEMONS_QUERY,
    {
      variables: {
        amount: 151,
      },
    }
  );

  const [fetchPokemon, state] = useManualQuery<{Pokemon: PokeDetail}>(POKEMON_QUERY);

  useEffect(() => {
    if (!data) return;
    setFilterList(
      data.Pokemons.filter((p) =>
        p.name.toLowerCase().includes(filter.toLowerCase())
      )
    );
  }, [data, filter]);

  const onPokemonClick = (name: string) => {
    fetchPokemon({ variables: { name } });
  };

  const onSavePokemon = (pokemon: PokeDetail) => {
    console.log('save ' + pokemon);
  }

  return (
    <>
      <Container>
        <div className={style.flexCol}>
          <div>
            <Logo />
          </div>
          <div className={style.flexRow}>
            <div>
              <PokemonFilter
                error={error}
                loading={loading}
                pokemons={filterList}
                onPokemonClick={onPokemonClick}
                filter={filter}
                setFilter={setFilter}
              />
            </div>
            <div>
              { state?.data?.Pokemon ? 
              <PokemonDetail pokemon={state.data.Pokemon} onSavePokemon={onSavePokemon} />
              :
              <span>Click pokemon to view details</span>
             }
            </div>
          </div>
          <div></div>
        </div>
      </Container>
    </>
  );
}
