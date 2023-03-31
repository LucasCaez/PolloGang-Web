import './css/barra.css'
import logo from '../cdn/pollogang.png'

function Barra() {
  return (

    <header>
    <div className="interior">
      <a href="/" className="logo"><img src={logo} alt="Logo" /></a>
      <nav className="navegacion">
        <ul>
          <li><a href="/" >INICIO</a></li>
          <li><a href="/equipo" >EQUIPO</a></li>
          <li><a href="/videos" >VÍDEOS</a></li>
          <li><a href="/faq">FaQ</a></li>


        </ul>
      </nav>
    </div>
  </header>

  );
}

export default Barra;
