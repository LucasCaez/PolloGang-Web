import './css/barra.css'
import logo from '../cdn/pollogang.png'

function Barra() {
  return (

    <header>
    <div className="interior">
      <a href="/" className="logo"><img src={logo} alt="Logo" /></a>
      <nav className="navegacion">
        <ul>
          <li><a href="/" target="blank">INICIO</a></li>
          <li><a href="/videos" target="blank">VÍDEOS</a></li>
          <li><a href="https://www.youtube.com/@PolloGang" target="blank">FaQ</a></li>
          <li><a href="/contacto" target="blank">CONTACTO</a></li>


        </ul>
      </nav>
    </div>
  </header>

  );
}

export default Barra;
