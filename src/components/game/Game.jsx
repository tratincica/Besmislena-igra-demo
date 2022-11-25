import GameFooter from "../game_layout/GaameFooter";
import GameHeader from "../game_layout/GameHeader";
import classes from "./Game.module.css";
import Level1 from "./levels/Level_1/Level1";
import CharacterContext from "../../store/charactere-context";
import { useContext, useEffect, useState } from "react";
import Home from './Home';

const Game = (props) => {
  const character = useContext(CharacterContext);
  const [showLevel1, setShowLevel1] = useState(true);
  const [showHome, setShowHome] = useState(false);

  const hideLevel1 = () => {
    setShowLevel1(false);
    setShowHome(true);
  };

  const bacanjeKocke = () => {
    return Math.floor(6 * Math.random()) + 1;
  };

  const izračunRezultata = (odabir) => {
    props.uTime("01:00");
    let rezultat;
    switch (odabir) {
      case "FIZ":
        rezultat = character.fiz + bacanjeKocke();
        if (rezultat > 6) {
          props.uProg(30);
          return "FIZA";
        } else {
          props.uProg(10)
          return "FIZB";
        }

      case "MOT":
        rezultat = character.mot + bacanjeKocke();
        if (rezultat > 6) {
          props.uProg(30);
          return "MOTA";
        } else {
          props.uProg(10)
          return "MOTB";
        }

      case "PSI":
        rezultat = character.psi + bacanjeKocke();
        if (rezultat > 6) {
          props.uProg(30)
          return "PSIA";
        } else {
          props.uProg(10)
          return "PSIB";
        }

      case "INT":
        rezultat = character.int + bacanjeKocke();
        if (rezultat > 6) {
          props.uProg(30)
          return "INTA";
        } else {
          props.uProg(10)
          return "INTB";
        }
      default:
        break;
    }
  };

  return (
    <div>
      <div>
        <GameHeader />
      </div>
      <div>
        {showLevel1 && (
          <Level1 rezultat={izračunRezultata} end={hideLevel1}  />
        )}
        {showHome && <Home />}
      </div>
      <div>
        <GameFooter />
      </div>
    </div>
  );
};

export default Game;
