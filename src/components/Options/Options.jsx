import styles from './Options.module.css';

export default function Options() {
  return (
    <div className={styles.optionsContainer}>
      <button className={styles.optionsButton}>Good</button>
      <button className={styles.optionsButton}>Neutral</button>
      <button className={styles.optionsButton}>Bad</button>
      <button className={styles.optionsButton}>Reset</button>
    </div>
  );
}
