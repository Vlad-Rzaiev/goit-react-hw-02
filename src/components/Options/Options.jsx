import styles from './Options.module.css';

export default function Options({ name, update }) {
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
    </div>
  );
}
