import { useState } from "react";
import Game from "./components/game/Game";
import Initialization from "./components/game/initialization/Initialization";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import CharacterContext from "./store/charactere-context";

function App() {
  const [firstTime, setFirstTime] = useState(true);
  const [game, setGame] = useState(false);
  const [lik, setLik] = useState({});

  const setInit = () => {
    setFirstTime(false);
    setGame(true);
  };

  const createCharacter = (character) => {
    setLik(character);
  };

  return (
    <>
      <Header />

      {firstTime && <Initialization show={setInit} stvoriLika={createCharacter} />}
      {game && (
        <CharacterContext.Provider value={lik}>
          <Game />
        </CharacterContext.Provider>
      )}
      <Footer />
    </>
  );
}

export default App;
