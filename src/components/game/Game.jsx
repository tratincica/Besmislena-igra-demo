import GameFooter from "../game_layout/GaameFooter";
import GameHeader from "../game_layout/GameHeader";
import classes from "./Game.module.css";
import Level1 from "./levels/Level_1/Level1";
import CharacterContext from "../../store/charactere-context";
import { useContext } from "react";

const Game = (props) => {
  const character = useContext(CharacterContext);

  const bacanjeKocke = () => {
    return Math.floor(6 * Math.random()) + 1;
  };

  const izračunRezultata = (odabir) => {
    let rezultat;
    switch (odabir) {
      case "FIZ":
        rezultat = character.fiz + bacanjeKocke();
        if (rezultat > 6) {
          return "FIZA";
        } else {
          return "FIZB";
        }

      case "MOT":
        rezultat = character.mot + bacanjeKocke();
        if (rezultat > 6) {
          return "MOTA";
        } else {
          return "MOTB";
        }

      case "PSI":
        rezultat = character.psi + bacanjeKocke();
        if (rezultat > 6) {
          return "PSIA";
        } else {
          return "PSIB";
        }

      case "INT":
        rezultat = character.int + bacanjeKocke();
        if (rezultat > 6) {
          return "INTA";
        } else {
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
        <Level1 rezultat={izračunRezultata} />
      </div>
      <div>
        <GameFooter />
      </div>
    </div>
  );
};

export default Game;
