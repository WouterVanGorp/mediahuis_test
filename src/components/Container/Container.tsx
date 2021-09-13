import styles from './Container.module.css';

export function Container(props: any) {
  return <div {...props} className={styles.root} />;
}
