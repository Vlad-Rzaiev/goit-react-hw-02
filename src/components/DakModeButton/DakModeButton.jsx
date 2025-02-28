import { useState, useEffect } from 'react';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import styles from './DakModeButton.module.css';

export default function DarkModeButton() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme !== null) {
      return JSON.parse(savedTheme);
    }

    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('darkMode');
    } else {
      document.body.classList.remove('darkMode');
    }
    localStorage.setItem('theme', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(state => !state);
  };

  return (
    <button className={styles.button} onClick={toggleDarkMode}>
      {isDarkMode ? (
        <BsSunFill color="yellow" size="24" />
      ) : (
        <BsMoonFill color="black" size="24" />
      )}
    </button>
  );
}
