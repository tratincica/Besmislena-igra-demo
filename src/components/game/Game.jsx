import GameFooter from "../game_layout/GaameFooter";
import GameHeader from "../game_layout/GameHeader";
import classes from "./Game.module.css";
import Level1 from "./levels/Level_1/Level1";

const Game = (props) => {
  return (
    <div>
      <div>
        <GameHeader />
      </div>
      <div>
        <Level1 />
      </div>
      <div>
        <GameFooter />
      </div>
    </div>
  );
};

export default Game;
