
import './css/equipo.css';
import Barra from '../componentes/barra';
import Inicio from '../componentes/inicio';
import Info from '../componentes/info';
import Caracteristicas from '../componentes/caracteristicas';
import Footer from '../componentes/footer';
import Cesar from '../cdn/users/cesar.webp'
import CesarBT from '../cdn/users/cesarbt.webp'
import Alei from '../cdn/users/alei.gif'
import Loxico from '../cdn/users/loxico.webp'
import Renyo from '../cdn/users/renyo.webp'
import Stevennn from '../cdn/users/stevennn.webp'
import Luc4s from '../cdn/users/luc4s.webp'
import Zowiikk from '../cdn/users/zowiikk.webp'
import Berny from '../cdn/users/berny.webp'
import Nightmarionette from '../cdn/users/Nightmarionette.webp'
import Pollo from '../cdn/users/pollo.webp'

function EquipoApp() {



  return (

    <>
      <Barra />

      <div className="equipo">
        <h1>STAFF POLLOGANG</h1>

        <h2>Admins <span style={{ color: "#ffde59" }}>PolloGang</span></h2>


<div className="team">

  <div className='caja'>
    <div className="img"><img src={Pollo} /></div>
    <div className="sub">
      <p>
        <a id='title'>PolloGod</a><br />
        <a id='role'>Owner & CEO</a>
        <div className="badges">
          <i id='badge' class="fa-brands fa-discord"></i>
          <i id='badge' class="fa-brands fa-youtube"></i>
          <i id='badge' class="fa-solid fa-arrow-up-right-from-square"></i>
        </div>
      </p>
    </div>
  </div>

</div>

        <h2>Moderadores <span style={{ color: "#ffde59" }}>PolloGang</span></h2>


        <div className="team">

          <div className='caja'>
            <div className="img"><img src={Luc4s} /></div>
            <div className="sub">


              <p>
                <a id='title'>LUCAS</a><br />
                <a id='role'>Mod & Dev Web</a>
                <div className="badges">
                  <i id='badge' class="fa-brands fa-discord"></i>
                  <i id='badge' class="fa-solid fa-arrow-up-right-from-square"></i>
                </div>
              </p>
            </div>
          </div>



          <div className='caja'>
            <div className="img"><img src={Zowiikk} /></div>
            <div className="sub">
              <p>
                <a id='title'>ZOWIIKK</a><br />
                <a id='role'>Mod & Designer</a>
                <div className="badges">
                  <i id='badge' class="fa-brands fa-discord"></i>
                  <i id='badge' class="fa-solid fa-arrow-up-right-from-square"></i>
                </div>
              </p>
            </div>
          </div>

        </div>
        <div className="team">

          <div className='caja'>
            <div className="img"><img src={Nightmarionette} /></div>
            <div className="sub">


              <p>
                <a id='title'>Nightmarionette</a><br />
                <a id='role'>Moderador</a>
                <div className="badges">
                  <i id='badge' class="fa-brands fa-discord"></i>
                  <i id='badge' class="fa-solid fa-arrow-up-right-from-square"></i>
                </div>
              </p>
            </div>
          </div>

          <div className='caja'>
            <div className="img"><img src={Berny} /></div>
            <div className="sub">
              <p>
                <a id='title'>BERNY</a><br />
                <a id='role'>Moderador</a>
                <div className="badges">
                  <i id='badge' class="fa-brands fa-discord"></i>
                  <i id='badge' class="fa-solid fa-arrow-up-right-from-square"></i>
                </div>
              </p>
            </div>
          </div>

        </div>

        <h2>Helpers <span style={{ color: "#ffde59" }}>PolloGang</span></h2>


        <div className="team">

          <div className='caja'>
            <div className="img"><img src={Cesar} /></div>
            <div className="sub">


              <p>
                <a id='title'>CESAAARIN</a><br />
                <a id='role'>Helper</a>
                <div className="badges">
                  <i id='badge' class="fa-brands fa-discord"></i>
                  <i id='badge' class="fa-solid fa-arrow-up-right-from-square"></i>
                </div>
              </p>
            </div>
          </div>



          <div className='caja'>
            <div className="img"><img src={Alei} /></div>
            <div className="sub">
              <p>
                <a id='title'>Alei</a><br />
                <a id='role'>Helper</a>
                <div className="badges">
                  <i id='badge' class="fa-brands fa-discord"></i>
                  <i id='badge' class="fa-solid fa-arrow-up-right-from-square"></i>
                </div>
              </p>
            </div>
          </div>

          <div className='caja'>
            <div className="img"><img src={Loxico} /></div>
            <div className="sub">
              <p>
                <a id='title'>LOXICO</a><br />
                <a id='role'>Helper</a>
                <div className="badges">
                  <i id='badge' class="fa-brands fa-discord"></i>
                  <i id='badge' class="fa-solid fa-arrow-up-right-from-square"></i>
                </div>
              </p>
            </div>
          </div>


        </div>
        <div className="team">

          <div className='caja'>
            <div className="img"><img src={Renyo} /></div>
            <div className="sub">


              <p>
                <a id='title'>RENYO</a><br />
                <a id='role'>Helper</a>
                <div className="badges">
                  <i id='badge' class="fa-brands fa-discord"></i>
                  <i id='badge' class="fa-solid fa-arrow-up-right-from-square"></i>
                </div>
              </p>
            </div>
          </div>

          <div className='caja'>
            <div className="img"><img src={Stevennn} /></div>
            <div className="sub">
              <p>
                <a id='title'>STEVENNN</a><br />
                <a id='role'>Helper</a>
                <div className="badges">
                  <i id='badge' class="fa-brands fa-discord"></i>
                  <i id='badge' class="fa-solid fa-arrow-up-right-from-square"></i>
                </div>
              </p>
            </div>
          </div>

          <div className='caja'>
            <div className="img"><img src={CesarBT} /></div>
            <div className="sub">
              <p>
                <a id='title'>CésarBT</a><br />
                <a id='role'>Helper</a>
                <div className="badges">
                  <i id='badge' class="fa-brands fa-discord"></i>
                  <i id='badge' class="fa-solid fa-arrow-up-right-from-square"></i>
                </div>
              </p>
            </div>
          </div>


        </div>
      </div>
      <Footer />
    </>

  );
}

export default EquipoApp;
