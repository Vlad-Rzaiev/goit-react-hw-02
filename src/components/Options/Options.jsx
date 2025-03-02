import styles from './Options.module.css';

export default function Options({ name, update, totalFeedback, reset }) {
  return (
    <div className={styles.optionsContainer}>
      {name.map((type, idx) => (
        <button
          className={styles.optionsButton}
          key={name[idx]}
          onClick={() => update(type)}
        >
          {type}
        </button>
      ))}
      {totalFeedback > 0 && (
        <button className={styles.optionsButton} onClick={reset}>
          Reset
        </button>
      )}
    </div>
  );
}
