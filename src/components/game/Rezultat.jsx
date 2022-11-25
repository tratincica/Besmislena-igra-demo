import Button from "react-bootstrap/Button";

const Rezultat = props => {

    return(
        <div>
            {props.opcija}
            <p>Što got se dogodilo sada si ostao sam u svom Dvorcu.</p>
            <Button variant="primary" onClick={props.end} >
                  Dalje!
            </Button>
        </div>
    )

}

export default Rezultat;