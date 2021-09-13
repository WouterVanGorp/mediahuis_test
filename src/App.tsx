import { useEffect, useState } from "react";
import { useManualQuery, useQuery } from "graphql-hooks";

import style from "./App.module.css";

import { PokemonOverview } from "models";
import { POKEMONS_QUERY, POKEMON_QUERY } from "./graphql";
import { Logo, Container, PokemonFilter } from "./components";

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

  const [fetchPokemon, state] = useManualQuery(POKEMON_QUERY);

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
            <div></div>
          </div>
          <div></div>
        </div>
      </Container>
    </>
  );
}
