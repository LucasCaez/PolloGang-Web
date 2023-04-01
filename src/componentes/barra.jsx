import './css/barra.css'
import {useNavigate} from 'react-router-dom';
import logo from '../cdn/pollogang.png'

function Barra() {
  const navigate = useNavigate();

  const clickInicio = () => { navigate('/'); };
  const clickEquipo = () => { navigate('/equipo/'); };
  const clickVideos = () => { navigate('/videos/'); };
  const clickFaQ = () => { navigate('/faq/'); };
  return (

    <header>
    <div className="interior">
      <a href="/" className="logo"><img src={logo} alt="Logo" /></a>
      <nav className="navegacion">
        <ul>
          <li><button onClick={clickInicio}>INICIO</button></li>
          <li><button onClick={clickEquipo}>EQUIPO</button></li>
          <li><button onClick={clickVideos}>VÍDEOS</button></li>
          <li><button onClick={clickFaQ}>FaQ</button></li>


        </ul>
      </nav>
    </div>
  </header>

  );
}

export default Barra;
