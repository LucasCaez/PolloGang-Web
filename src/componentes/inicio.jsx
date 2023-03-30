import './css/inicio.css'
import logo from '../cdn/logo.png'


function Inicio() {
  return (


    <div className="inicio">

      <img id='img-2' src={logo} alt="logo" />



      <div className="contenido">
        <div className="title">
          <h1>PolloGang</h1>
          <h2>¡ Aprende a programar un bot de discord !</h2>
        </div >

        <div className="desc">
          <a className='btn' href="https://discord.gg/pollogang" target="blank">SERVIDOR DE DISCORD</a>
          <a className='btn-1' href="https://www.youtube.com/@PolloGang" target="blank">YOUTUBE</a>
        </div>
      </div>

      <img id='img-1' src={logo} alt="logo" />



    </div>

  );
}

export default Inicio;
