import styled, { ThemeConsumer } from 'styled-components';
import { useState, useEffect } from 'react';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((results) => results.json())
      .then((data) =>
        setCharacters(
          data.results.map((character) => {
            return character;
          })
        )
      );
  }, []);

  console.log(characters);
  return (
    <div>
      <MainWrapper></MainWrapper>
    </div>
  );
}

export default App;

const MainWrapper = styled.div``;
