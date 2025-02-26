import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import styles from './DakModeButton.module.css';

export default function DarkModeButton({ onClick, isDarkMode }) {
  return (
    <button className={styles.button} onClick={onClick}>
      {isDarkMode ? (
        <BsSunFill color="yellow" size="24" />
      ) : (
        <BsMoonFill color="black" size="24" />
      )}
    </button>
  );
}
