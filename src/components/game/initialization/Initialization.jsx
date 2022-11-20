import { useState } from "react";
import Button from "react-bootstrap/Button";
import classes from "./Initialization.module.css";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

const Welcome = (props) => {
  const customHandler = (e) => {
    e.preventDefault();
    props.setOn();
  };

  return (
    <div className={classes.container}>
      <div>
        <h2>Dobro došli!</h2>
        <p>Ovo je Besmislena Igra</p>
        <p>Još smo u DEMO verziji pa uzmite s rezervom.</p>
        <p>Za početak odaberite lika</p>
      </div>
      <div className={classes.buttons}>
        <div>
          <Button variant="primary" disabled>
            Lino
          </Button>
        </div>
        <div>
          <Button variant="primary" disabled>
            Tomažina
          </Button>
        </div>
        <div>
          <Button variant="primary" onClick={customHandler}>
            Custom
          </Button>
        </div>
      </div>
    </div>
  );
};

const Custom = (props) => {
  const customHandler = (e) => {
    e.preventDefault();
    props.setOn();
  };

  const [radioValue, setRadioValue] = useState("1");
  const [enteredName, setEnteredName] = useState("");
  const [enteredInt, setInt] = useState(1);
  const [enteredMot, setMot] = useState(1);
  const [enteredPsi, setPsi] = useState(1);
  const [enteredFiz, setFiz] = useState(1);

  let maxBodova = 12 - enteredInt - enteredMot - enteredPsi - enteredFiz;

  let error = `Maksimalno može biti 6 bodova, i trenutno na raspolaganju imate ${maxBodova} bodova za podijeliti!`;

  const nameChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const intChangeHandler = (event) => {
    if (maxBodova > 0 && event.target.value <= 6) {
      setInt(event.target.value);
    } else {
      alert(error);
    }
  };

  const motChangeHandler = (event) => {
    if (maxBodova > 0 && event.target.value <= 6) {
      setMot(event.target.value);
    } else {
      alert(error);
    }
  };

  const psiChangeHandler = (event) => {
    if (maxBodova > 0 && event.target.value <= 6) {
      setPsi(event.target.value);
    } else {
      alert(error);
    }
  };

  const fizChangeHandler = (event) => {
    if (maxBodova > 0 && event.target.value <= 6) {
      setFiz(event.target.value);
    } else {
      alert(error);
    }
  };

  const radios = [
    { name: "Muško", value: "1" },
    { name: "Žensko", value: "2" },
  ];

  const addCharacter = (e) => {
    e.preventDefault();
    if (maxBodova > 0) {
      alert(`Imaš još ${maxBodova} na raspolaganju!`);
    }
    if (enteredName.trim() == 0) {
      alert("Unesi ime!");
    } else {
      setEnteredName("");
      setFiz(1);
      setInt(1);
      setMot(1);
      setPsi(1);
      setRadioValue("1");
      console.log("Sve OK!");
    }
  };

  return (
    <div>
      <div>
        <h2>Custom Lik</h2>
      </div>
      <form onSubmit={addCharacter} className={classes.container2}>
        <div>
          <label htmlFor="name">Ime:</label>
          <input
            type="text"
            id="name"
            value={enteredName}
            onChange={nameChangeHandler}
            placeholder="Your name..."
          />
        </div>
        <div>
          <ButtonGroup>
            {radios.map((radio, idx) => (
              <ToggleButton
                key={idx}
                id={`radio-${idx}`}
                type="radio"
                variant={idx % 2 ? "outline-success" : "outline-danger"}
                name="radio"
                value={radio.value}
                checked={radioValue === radio.value}
                onChange={(e) => setRadioValue(e.currentTarget.value)}
              >
                {radio.name}
              </ToggleButton>
            ))}
          </ButtonGroup>
        </div>
        <div>
          <label htmlFor="psi">Psiha:</label>
          <input
            className={classes.atributi}
            type="number"
            id="psi"
            value={enteredPsi}
            onChange={psiChangeHandler}
            min={1}
            max={6}
          />
        </div>
        <div>
          <label htmlFor="int">Intelekt:</label>
          <input
            className={classes.atributi}
            type="number"
            value={enteredInt}
            onChange={intChangeHandler}
            id="int"
            min={1}
            max={6}
          />
        </div>
        <div>
          <label htmlFor="mot">Motorika:</label>
          <input
            className={classes.atributi}
            type="number"
            value={enteredMot}
            onChange={motChangeHandler}
            id="mot"
            min={1}
            max={6}
          />
        </div>
        <div>
          <label htmlFor="fiz">Fizikalnost:</label>
          <input
            className={classes.atributi}
            type="number"
            value={enteredFiz}
            onChange={fizChangeHandler}
            id="fiz"
            min={1}
            max={6}
          />
        </div>
        <div>
          <p>Bodova na raspolaganju: {maxBodova}</p>
        </div>
        <div className={classes.buttons}>
          <div>
            <Button variant="danger" onClick={customHandler}>
              Odustani
            </Button>
          </div>
          <div>
            <Button variant="primary" type="submit">
              U redu!
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

const Initialization = (props) => {
  const [isWelcomeOn, setIsWelcomeOn] = useState(true);

  const customHandler = () => {
    setIsWelcomeOn(!isWelcomeOn);
  };

  const toggleRender = isWelcomeOn ? (
    <Welcome setOn={customHandler} />
  ) : (
    <Custom setOn={customHandler} />
  );

  return <>{toggleRender}</>;
};

export default Initialization;
