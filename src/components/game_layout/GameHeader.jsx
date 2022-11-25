import Button from "react-bootstrap/Button";
import classes from "./GameHeader.module.css";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useContext } from "react";
import CharacterContext from "../../store/charactere-context";

const GameHeader = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const character = useContext(CharacterContext);

  return (
    <div className={classes.container}>
      <div className={classes.options}>
        <Button variant="info" onClick={handleShow}>
          Profil
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{character.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body className={classes.modalInfo}>
            <p>
              <b>Level {character.lvl}</b>
            </p>
            <p>
              <i>{character.prog} / 100 Exp</i>
            </p>
            <p>Inteligencija: {character.int} </p>
            <p>Motorika: {character.mot}</p>
            <p>Psiha: {character.psi} </p>
            <p>Fizikalnost: {character.fiz} </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Zatvori
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div className={classes.options}> Chapter {character.chapter} </div>
      <div className={classes.options}> {character.time} H </div>
    </div>
  );
};

export default GameHeader;
