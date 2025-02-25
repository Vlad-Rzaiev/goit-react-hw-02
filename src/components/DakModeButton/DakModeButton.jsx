import { FaMoon, FaSun } from 'react-icons/fa';
import styles from './DakModeButton.module.css';

export default function DarkModeButton({ onClick, isDarkMode }) {
  return (
    <button className={styles.button} onClick={onClick}>
      {isDarkMode ? (
        <FaSun color="yellow" size="24" />
      ) : (
        <FaMoon color="black" size="24" />
      )}
    </button>
  );
}
