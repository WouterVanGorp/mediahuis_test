import styles from './Logo.module.css';

export default function Container(props: any) {
  return <div {...props} className={styles.root} />;
}
