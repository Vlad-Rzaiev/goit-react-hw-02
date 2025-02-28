import styles from './Feedback.module.css';

export default function Feedback({ titles, values }) {
  return (
    <div className={styles.feedbackContainer}>
      {titles.map((title, idx) => (
        <p className={styles.feedbackText} key={title[idx]}>
          {title}: {values[idx]}
        </p>
      ))}
    </div>
  );
}
