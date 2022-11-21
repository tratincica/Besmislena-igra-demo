import { useContext } from "react";
import CharacterContext from "../../store/charactere-context";

const Game = props => {

    const character = useContext(CharacterContext);
    return(
        <>
            <h1>Igra!</h1>
            <h2>Vaš lik</h2>
            <p>Ime: {character.name}</p>
            <p>Inteligencija: {character.int} </p>
            <p>Motorika: {character.mot}</p>
            <p>Psiha: {character.psi} </p>
            <p>Fizikalnost: {character.fiz} </p>
            
        </>
    );

}

export default Game;