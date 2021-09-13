interface Props {
  name: string;
}

export function PokemonItem({ name }: Props) {
  return <div>{name}</div>;
}
