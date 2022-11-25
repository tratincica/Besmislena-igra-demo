import Button from "react-bootstrap/Button";
import classes from "./Home.module.css";

const Home = (props) => {
  return (
    <div className={classes.container}>
      <h1 className={classes.item}>Dvorac</h1>
      <div className={classes.item}>
        <Button variant="warning">Meditiraj.</Button>
      </div>
      <div className={classes.item}>
        <Button variant="warning">Čitaj.</Button>
      </div>
      <div className={classes.item}>
        <Button variant="warning">Sviraj gitaru!</Button>
      </div>
      <div className={classes.item}>
        <Button variant="warning">Diži utege!</Button>
      </div>
      <div className={classes.item}>
        <Button variant="success">Nazovi Vuka.</Button>
      </div>
    </div>
  );
};

export default Home;
