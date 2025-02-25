import { useState, useEffect } from 'react';
import Section from './components/section/Section';
import Container from './components/container/Container';
import DarkModeButton from './components/DakModeButton/DakModeButton';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
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
    setIsDarkMode(prev => !prev);
  };

  return (
    <Section>
      <Container>
        <DarkModeButton onClick={toggleDarkMode} isDarkMode={isDarkMode} />
        <h1>Hello React</h1>
      </Container>
    </Section>
  );
}

export default App;
