import styles from './Feedback.module.css';

export default function Feedback({
  titles,
  values,
  totalFeedback,
  positiveFeedback,
}) {
  return (
    <div className={styles.feedbackContainer}>
      {titles.map((title, idx) => (
        <p className={styles.feedbackText} key={title[idx]}>
          {title}: {values[idx]}
        </p>
      ))}
      <p className={styles.feedbackText}>Total: {totalFeedback}</p>
      <p className={styles.feedbackText}>
        Positive: {isNaN(positiveFeedback) ? 0 : positiveFeedback}%
      </p>
    </div>
  );
}
