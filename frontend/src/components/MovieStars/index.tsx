import {ReactComponent as StarFull} from 'assets/img/starfull.svg';
import {ReactComponent as StarHalf} from 'assets/img/starmid.svg';
import {ReactComponent as StarEmpty} from 'assets/img/starempty.svg';
import './style.css';

function MovieStars() {
  return (
    <div className="dsmovie-stars-container">
    <StarFull />
    <StarFull />
    <StarFull />
    <StarHalf />
    <StarEmpty />
    </div>
    );
    
  }
  
  export default MovieStars;
  