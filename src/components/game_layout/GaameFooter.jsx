import ProgressBar from 'react-bootstrap/ProgressBar';
import classes from './GameFooter.module.css';
import { useContext } from "react";
import CharacterContext from "../../store/charactere-context";

const GameFooter = props => {

    const character = useContext(CharacterContext);

    return(
        <div className={classes.container}>
            <p>Level {character.lvl}</p>
            <ProgressBar animated now={character.prog} />;
        </div>
    );
};

export default GameFooter;