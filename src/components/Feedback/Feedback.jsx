import styles from './Feedback.module.css';

export default function Feedback() {
  return (
    <div className={styles.feedbackContainer}>
      <p className={styles.feedbackText}>Good</p>
      <p className={styles.feedbackText}>Neutral</p>
      <p className={styles.feedbackText}>Bad</p>
      <p className={styles.feedbackText}>Total</p>
      <p className={styles.feedbackText}>Positive</p>
    </div>
  );
}
