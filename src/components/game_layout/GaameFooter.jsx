import ProgressBar from 'react-bootstrap/ProgressBar';
import classes from './GameFooter.module.css'

const GameFooter = props => {

    return(
        <div className={classes.container}>
            <p>Level 1</p>
            <ProgressBar animated now={10} />;
        </div>
    );
};

export default GameFooter;