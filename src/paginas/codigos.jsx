import './css/code.css'
import Barra from '../componentes/barra';
import Footer from '../componentes/footer';

function CodeApp() {

  <Barra />

  return (
    <>

      {
        document.addEventListener("keyup", e => {

          if (e.target.matches("#buscador-code")) {

            if (e.key === "Escape") e.target.value = ""

            document.querySelectorAll(".codigos").forEach(faqReq => {

              faqReq.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                ? faqReq.classList.remove("filtro")
                : faqReq.classList.add("filtro")
            })

          }


        })
      }
      <Barra />
      <div className='Info'>
        <h1>CÓDIGOS VIDEOS</h1>

        <div className='buscador'>
          <input type="text" name="buscador" id="buscador-code" placeholder="Buscar códigos" />
        </div>

        <div className="cod">

        <div className="code">

          <div className="codigos">
            <a className='title'>Bot Discord.js v14</a>
            <a href="https://drive.google.com/file/d/1JOop0pkZ_rI9Teiirba-GzUgA8Mku89f/view?usp=share_link" target="blank"><i style={{ transform: "translateX(118px) translateY(32px)" }} class="fa-solid fa-download"></i> </a><br />
            <a className='descripcion'>Código para tu Bot Discord.js v14</a>
          </div>

          <div className="codigos">
            <a className='title'>Bot activo 24/7</a>
            <a href="https://drive.google.com/file/d/1mYMEuUH3yyjwe9xgAIhTbuBeHv95byV-/view?usp=share_link" target="blank"><i style={{ transform: "translateX(138px) translateY(32px)" }} class="fa-solid fa-download"></i></a><br />
            <a className='descripcion'>Código para tu Bot activo 24/7</a>
          </div>

 

        </div>

        <div className="code">



         <div className="codigos">
            <a className='title'>Event Handler</a>
            <a href="https://drive.google.com/file/d/1l07qsNXwLv0dnkxrI9emBjNkUT0zUQR7/view?usp=share_link" target="blank"><i style={{ transform: "translateX(150px) translateY(32px)" }} class="fa-solid fa-download"></i></a> <br />
            <a className='descripcion'>Código para el Event Handler</a>
          </div>
          <div className="codigos">
            <a className='title'>Command Handler</a>
            <a href="https://drive.google.com/file/d/1ZDUX5pjLdc3bnBaEaJAnvVAgJTv9xcm5/view?usp=share_link" target="blank"><i style={{ transform: "translateX(108px) translateY(32px)" }} class="fa-solid fa-download"></i></a> <br />
            <a className='descripcion'>Código para el Command Handler</a>
          </div>





        </div>

        <div className="code">


        <div className="codigos">
            <a className='title'>Comandos Prefix </a>
            <a href="https://drive.google.com/file/d/1dsykht97Hltk1HVTtjMaIP10d2ntcJUw/view?usp=share_link" target="blank"><i style={{ transform: "translateX(118px) translateY(32px)" }} class="fa-solid fa-download"></i> </a><br />
            <a className='descripcion'>Código Comandos con Prefix </a>
          </div>

          <div className="codigos">
            <a className='title'>Comandos de Moderación</a>
            <a href="https://drive.google.com/file/d/18dx2x9ZO4JrSabq2jYHrRSEC9nkAkauP/view?usp=share_link" target="blank"><i style={{ transform: "translateX(40px) translateY(32px)" }} class="fa-solid fa-download"></i> </a><br />
            <a className='descripcion'>Código Comandos de Moderacion</a>
          </div>


        </div>

        <div className="code">

          <div className="codigos">
            <a className='title'>Logs Moderación</a>
            <a href="https://drive.google.com/file/d/1RMKx6URAtwWKg4VIye8PZ6baSxQ8Euop/view?usp=share_link" target="blank"><i style={{ transform: "translateX(118px) translateY(32px)" }} class="fa-solid fa-download"></i></a> <br />
            <a className='descripcion'>Código logs de moderacion </a>
          </div>

          <div className="codigos">
            <a className='title'>Sistema de Tickets</a>
            <a href="https://drive.google.com/file/d/1ayKL9iSoDFNBu1p2Mjpp09zxO_kXs523/view?usp=share_link" target="blank"><i style={{ transform: "translateX(113px) translateY(32px)" }} class="fa-solid fa-download"></i></a><br />
            <a className='descripcion'>Código Sistema de Tickets Basico</a>
          </div>




        </div>

        <div className="code">

          <div className="codigos">
            <a className='title'>Sistema de Sugerencias</a>
            <a href="https://drive.google.com/file/d/10ta76U9h8hSvdOd0EPSWv6XoYmAx79Kg/view?usp=share_link" target="blank"><i style={{ transform: "translateX(65px) translateY(32px)" }} class="fa-solid fa-download"></i></a><br />
            <a className='descripcion'>Código Sistema de Sugerencias</a>
          </div>

          <div className="codigos">
            <a className='title'>AntiCrash</a>
            <a href="https://drive.google.com/file/d/1-0M3W1dTak8U5Yl0wGu8y3gtYus5bYY9/view?usp=share_link" target="blank"><i style={{ transform: "translateX(186px) translateY(32px)" }} class="fa-solid fa-download"></i></a> <br />
            <a className='descripcion'>Código AntiCrash</a>
          </div>


        </div>

        </div>
      </div>
      <Footer />

    </>
  );
}

export default CodeApp;
