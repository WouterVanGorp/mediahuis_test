import style from './PokemonPhoto.module.css';

interface Props {
  img: string;
  name: string;
}

export function PokemonPhoto({ img, name }: Props) {
  return (
    <>
    <img alt={name} src={img} />
    <div className={style.pokemonName}>{name.toUpperCase()}</div>
    </>
  );
}
