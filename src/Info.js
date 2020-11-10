import react, {useState} from 'react';
import './App.css';

function Info(props) {
    const [isShown, setvisibility] = useState(false);
    const moreinfo = () => {
        setvisibility(!isShown);
    };
    return (
        <div className="club" onClick={moreinfo}>
        <h3>{props.Naam}</h3>
        <p className={isShown ? 'show' : ""}>{props.Leden}</p>
      </div>
    );
}

export default Info;