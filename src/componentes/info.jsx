import './css/info.css'

import like from '../cdn/like.png';
import risas from '../cdn/risas.png';
import regalo from '../cdn/regalo.png';


function Info() {

  return (
    <div className='Info'>

      <div className="content-d">

        <img src={like} alt="like" />
        <div className="int">
          <h3>AYUDA A TUS DUDAS</h3>
          <p>Recibiras ayuda a todos tus problemas y dudas por nuestro <span style={{ color: "#ffde59" }}>servidor de discord</span></p>

        </div>
      </div>

      <div className="content-i">


        <div className="int">
          <h3>LA MEJOR COMUNIDAD</h3>
          <p>Riete y pasatelo bien con nuestra <span style={{ color: "#ffde59" }}> comunidad de discord</span></p>

        </div>
        <img src={risas} alt="like" />
      </div>

    </div>
  );
}

export default Info;
