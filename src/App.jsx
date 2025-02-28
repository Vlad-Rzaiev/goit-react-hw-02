import { useState, useEffect } from 'react';
import Section from './components/section/Section';
import Container from './components/container/Container';
import DarkModeButton from './components/DakModeButton/DakModeButton';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';

function App() {
  const [values, setValues] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = feedbackType => {
    setValues(prevArr => ({
      ...prevArr,
      [feedbackType]: prevArr[feedbackType] + 1,
    }));
  };

  return (
    <Section>
      <Container>
        <DarkModeButton />

        <Description />

        <Options name={Object.keys(values)} update={updateFeedback} />

        <Feedback titles={Object.keys(values)} values={Object.values(values)} />
      </Container>
    </Section>
  );
}

export default App;
