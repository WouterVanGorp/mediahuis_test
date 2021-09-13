import { useEffect, useState } from "react";
import { useQuery } from "graphql-hooks";

import { PokemonOverview } from "models";
import { Logo, Container, PokemonFilter } from "./components";

export default function App() {
  const [filter, setFilter] = useState<string>("");
  const [filterList, setFilterList] = useState<PokemonOverview[]>([]);

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

  useEffect(() => {
    if (!data) return;
    setFilterList(
      data.Pokemons.filter((p) =>
        p.name.toLowerCase().includes(filter.toLowerCase())
      )
    );
  }, [data, filter]);

  const onPokemonClick = (name: string) => {
    console.log("Pokemon clicked " + name);
  };

  return (
    <>
      <Container>
        <Logo />
        <PokemonFilter
          error={error}
          loading={loading}
          pokemons={filterList}
          onPokemonClick={onPokemonClick}
          filter={filter}
          setFilter={setFilter}
        />
      </Container>
    </>
  );
}
