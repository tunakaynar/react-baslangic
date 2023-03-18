import {Button} from "react-bootstrap"; //button olan bootstrap eklemek istediklerimizi yazıyoruz.
import "bootstrap/dist/css/bootstrap.min.css";

function Bootstrap() {
    return(
        <div>
            <h3> Bootstrap Komponentleri</h3>
            <Button variant="success">Evet</Button>
            <Button variant="danger">Hayır</Button>
        </div>
    )
}

export default Bootstrap