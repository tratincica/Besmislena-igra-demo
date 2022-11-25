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

  const updateProg = (newProg) => {
    setLik((prevLik) => {
      return {
        name: prevLik.name,
        int: prevLik.int,
        mot: prevLik.mot,
        psi: prevLik.psi,
        fiz: prevLik.fiz,
        lvl: prevLik.lvl,
        prog: prevLik.prog + newProg,
        time: prevLik.time,
        chapter: prevLik.chapter,
      };
    });
  };

  const updateTime = (newTime) => {
    setLik((prevLik) => {
      return {
        name: prevLik.name,
        int: prevLik.int,
        mot: prevLik.mot,
        psi: prevLik.psi,
        fiz: prevLik.fiz,
        lvl: prevLik.lvl,
        prog: prevLik.prog,
        time: newTime,
        chapter: prevLik.chapter,
      };
    });
  };

  const updateChapter = (newChapter) => {
    setLik((prevLik) => {
      return {
        name: prevLik.name,
        int: prevLik.int,
        mot: prevLik.mot,
        psi: prevLik.psi,
        fiz: prevLik.fiz,
        lvl: prevLik.lvl,
        prog: prevLik.prog,
        time: prevLik.time,
        chapter: newChapter,
      };
    });
  };

  const createCharacter = (character) => {
    setLik(character);
  };

  return (
    <>
      <Header />

      {firstTime && (
        <Initialization show={setInit} stvoriLika={createCharacter} />
      )}
      {game && (
        <CharacterContext.Provider value={lik}>
          <Game uProg={updateProg} uChapter={updateChapter} uTime={updateTime}/>
        </CharacterContext.Provider>
      )}
      <Footer />
    </>
  );
}

export default App;
