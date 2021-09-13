import styles from "./PokemonItem.module.css";

interface Props {
  name: string;
  onClick: (name: string) => void;
}

export function PokemonItem({ name, onClick }: Props) {
  const handlePokemonClicked = () => {
    onClick(name);
  };

  return (
    <div className={styles.root} onClick={handlePokemonClicked}>
      {name.toUpperCase()}
    </div>
  );
}
