export interface PokemonDetail {
  id: number;
  name: string;
  image: string;
  abilities: { name: string }[];
  stats: { name: string; value: number }[];
  types: { name: string }[];
}
