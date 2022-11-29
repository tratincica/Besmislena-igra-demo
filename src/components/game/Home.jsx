import Button from "react-bootstrap/Button";
import classes from "./Home.module.css";
import CharacterContext from "../../store/charactere-context";
import { useContext, useEffect, useState } from "react";

const Home = (props) => {

  const character = useContext(CharacterContext);

  const meditiraj = () => {
    const rezultat = character.psi + props.kocka();
    props.uTime(3);
    if (rezultat > 6 && character.time <= 7) {
      props.uProg(30);
    } else {
      return;
    }
  }

  const citaj = () => {
    const rezultat = character.int + props.kocka();
    props.uTime(3);
    if (rezultat > 6  && character.time <= 7) {
      props.uProg(30);
    } else {
      return;
    }
  }

  const gitara = () => {
    const rezultat = character.mot + props.kocka();
    props.uTime(3);
    if (rezultat > 6  && character.time <= 7 ) {
      props.uProg(30);
    } else {
      return;
    }
  }

  const utezi = () => {
    const rezultat = character.fiz + props.kocka();
    props.uTime(3);
    if (rezultat > 6  && character.time <= 7 ) {
      props.uProg(30);
    } else {
      return;
    }
  }

  const nazovi = () => {
    alert("Nazvao si Vuka, ovdje DEMO igra završava i počinje novi level!");
    props.fin();
  }

  return (
    <div className={classes.container}>
      <h1 className={classes.item}>Dvorac</h1>
      <div className={classes.item}>
        <Button variant="warning" onClick={meditiraj}>Meditiraj.</Button>
      </div>
      <div className={classes.item}>
        <Button variant="warning" onClick={citaj}>Čitaj.</Button>
      </div>
      <div className={classes.item}>
        <Button variant="warning" onClick={gitara}>Sviraj gitaru!</Button>
      </div>
      <div className={classes.item}>
        <Button variant="warning" onClick={utezi}>Diži utege!</Button>
      </div>
      <div className={classes.item}>
        <Button variant="success" onClick={nazovi}>Nazovi Vuka.</Button>
      </div>
    </div>
  );
};

export default Home;
