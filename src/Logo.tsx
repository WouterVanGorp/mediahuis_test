import styles from './Logo.module.css';

export default function Logo(props: any) {
  return (
    <img
      {...props}
      alt="Pokémon"
      className={styles.root}
      src={process.env.PUBLIC_URL + '/logo.png'}
    />
  );
}
