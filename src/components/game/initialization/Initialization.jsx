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

  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("1");

  const radios = [
    { name: "Muško", value: "1" },
    { name: "Žensko", value: "2" },
  ];

  return (
    <div>
      <div>
        <h2>Custom Lik</h2>
      </div>
      <form action="" className={classes.container2}>
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
          <label htmlFor="name">Unesi ime lika.</label>
          <input type="text" id="name" />
        </div>
        <div>
          <label htmlFor="psi">Psiha:</label>
          <input className={classes.atributi} type="number" id="psi" min={1} />
        </div>
        <div>
          <label htmlFor="int">Intelekt:</label>
          <input className={classes.atributi} type="number" id="int" min={1} />
        </div>
        <div>
          <label htmlFor="mot">Motorika:</label>
          <input className={classes.atributi} type="number" id="mot" min={1} />
        </div>
        <div>
          <label htmlFor="fiz">Fizikalnost:</label>
          <input className={classes.atributi} type="number" id="fiz" min={1} />
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
