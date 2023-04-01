
import './App.css';
import logo from './cdn/logo.png'
import risas from './cdn/risas.png'
import like from './cdn/like.png'
import Barra from './componentes/barra';
import Footer from './componentes/footer';

function AppHome() {

  return (

    <>
      <Barra />

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




      <div className='Caracteristicas'>

        <h1 id='c-2'>CARACTERÍSTICAS</h1>

        <div className="in">
          <div className="i">
            <h1 id='c-1'>CARACTERÍSTICAS</h1>

            <div className="info">
              <i className="fa-brands fa-youtube"></i>
              <h3>+600 <span style={{ color: "#ffde59" }}>subs</span></h3>
            </div>

            <div className="info">
              <i className="fa-solid fa-eye"></i>
              <h3>+50.000 <span style={{ color: "#ffde59" }}>views</span></h3>
            </div>

            <div className="info">
              <i className="fa-brands fa-discord"></i>
              <h3>+1000 <span style={{ color: "#ffde59" }}>miembros</span></h3>
            </div>
          </div>
        </div>

      </div>
      <div className="Info">
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
      <Footer />
    </>



  );
}

export default AppHome;
