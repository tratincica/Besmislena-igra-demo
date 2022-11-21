import GameFooter from "../game_layout/GaameFooter";
import GameHeader from "../game_layout/GameHeader";
import classes from "./Game.module.css";

const Game = (props) => {
  return (
    <div>
      <div>
        <GameHeader />
      </div>
      <div>
        <h1>Igra!</h1>
      </div>
      <div>
        <GameFooter />
      </div>
    </div>
  );
};

export default Game;
