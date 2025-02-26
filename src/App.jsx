import { useState, useEffect } from 'react';
import Section from './components/section/Section';
import Container from './components/container/Container';
import DarkModeButton from './components/DakModeButton/DakModeButton';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';

function App() {
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
    <Section>
      <Container>
        <DarkModeButton onClick={toggleDarkMode} isDarkMode={isDarkMode} />

        <Description />

        <Options />

        <Feedback />
      </Container>
    </Section>
  );
}

export default App;
