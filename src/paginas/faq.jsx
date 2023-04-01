
import './css/faq.css';
import Barra from '../componentes/barra';
import Footer from '../componentes/footer';
import {useNavigate} from 'react-router-dom';


function FaQApp() {


  const navigate = useNavigate();

  const clickPerms = () => { navigate('/faq/permisos'); };
  const clickEventos = () => { navigate('/faq/eventos'); };

  return (

    <>
      <Barra />

      <div className="faq">
        <h1>PROBLEMAS FRECUENTES</h1>
        <div className='buscador'>
          <input type="text" name="buscador" id="buscador" placeholder="Busca tu error" />
          <button style={{ padding: "8px 10px", backgroundColor: "#2e2e32", borderRadius: "8px", marginLeft: "5px", textDecoration: "node", color: "#fff" }} onClick={clickPerms}>Ver Permisos</button>
          <button style={{ padding: "8px 10px", backgroundColor: "#2e2e32", borderRadius: "8px", marginLeft: "5px", textDecoration: "node", color: "#fff" }} onClick={clickEventos}>Ver Eventos</button>
        </div>
        <div className="contenido">



          <div className="c">
            <div id='intents' className="faqs">
              <a>
                Error [DisallowedIntents] Privileged intent provided is not enabled or whitelisted.
              </a>
              <p><br />
                Este error se da ya que no tienes activados los intents en el portal de developers de Discord, para solucionarlo sigue los siguientes pasos:<br />
                <br />
                1.- Ingresa a: https://discord.com/developers/applications<br />
                <br />
                2.- Activa las opciones que se ven en la imagen en el apartado de Bot<br />
                <br />
                3.- Reinicia Visual Studio Code y tu bot<br /><br />
                <img src='https://cdn.discordapp.com/attachments/1059997642970632192/1059997643104845824/image_9.png' width={"600px"} />
                <br /><span style={{ margin: "10px", opacity: "80%" }} >Escrito por <span style={{ color: "#ff9759" }} >PolloGang</span></span>
              </p>

            </div>

            <div className="faqs">
              <a>
                No aparece la tabla de eventos/comandos.
              </a>
              <p><br />
                Si  al encender el bot este no te muestra la tabla de eventos/comandos lo mas probable es que se trate de la versión de glob.<br />

                Para solucionarlo ejecuta en tu terminal los siguientes comandos:<br /><br />
                <strong style={{ color: "#ff9759" }}>                
                  npm uninstall glob
                  <br />
                  npm i glob@8.0.3
                  </strong>

                <br /><br />
                Con esto estaremos volviendo a una versión anterior que es en la cual están creados los códigos de los videos.
                <br /><br />
                <img src='https://cdn.discordapp.com/attachments/1080883288194961599/1080883288501137458/image.png' width={"600px"} />
                <br /><span style={{ margin: "10px", opacity: "80%" }} >Escrito por <span style={{ color: "#ff9759" }} >PolloGang</span></span>
              </p>

            </div>

            <div id='SyntaxError' className="faqs">
              <a>
                SyntaxError.
              </a>
              <p><br />
                Siempre que vamos una error como este mostrado  él imagen, que en la descripción del error nos dice SyntaxError, explicado en palabras entendibles, Algo en el código está mal escrito<br />
                <br />
                Por lo general nos muestra la ruta en la que se encuentra el error, cómo vemos en la imagen el error está en la carpeta comandos en el archivo p.js  seguido de un número que el número de línea en este caso la 34<br />
                <br />
                Una vez explicado esto, ustedes mismo pueden verificar dónde está lo que está mal escrito y corregirlo.<br />
                <br />

                OJO este error de Syntax puede aparecer por la falta de algún carácter como en ese caso que es un simple<br /><br />
                <img src='https://cdn.discordapp.com/attachments/1060012082721996850/1060012082860400640/IMG_1598.png' width={"600px"} />
                <br /><span style={{ margin: "10px", opacity: "80%" }} >Escrito por <span style={{ color: "#ff9759" }} >Berny</span></span>

              </p>

            </div>

            <div id='mongo-connect' className="faqs">
              <a>ERROR DE IP AL CONECTARSE A MONGODB.
              </a>
              <p><br />
                <span style={{ opacity: "60%" }}>Cómo vemos en la imagen es posible que al crear tu base de datos, tu has configurado una IP para que accedan a ella, probablemente hayas puesto la tuya. Entonces, este error se debe a que estás tratando de conectar a la base de datos desde otro dispositivo, otra plataforma. Por ejemplo: Replit, Heroku, etc, que tienen IP diferente a la que configuraste.</span>
                <br /><br />
                Por lo tanto, para configurar una <strong>IP Global</strong>, lo que tendrás que hacer, es entrar a tu cuenta de MongoDB. Al estar dentro de tu base de datos, te irás al apartado de <strong style={{ color: "#ff9759" }}> Network Access</strong> para la Configuración de Red. Al estar ahí, aparecerá algo de la IP. Presiona en el engranaje en donde dice "Edit" y presiona en el botón <strong>"Allow Access from Anywhere"</strong> y luego le das a <strong>"Confirm"</strong>. Por último, espera unos segundos hasta que diga <strong>"Active"</strong> y reinicia el bot.
                <br /><br />
                <img src='https://cdn.discordapp.com/attachments/1060198968837025873/1060198969088671764/IMG_1608.png' width={"600px"} />
                <br /><span style={{ margin: "10px", opacity: "80%" }} >Escrito por <span style={{ color: "#ff9759" }} >Berny</span></span>

              </p>

            </div>

            <div className="faqs">
              <a>Object is not defined.</a>
              <p><br />
                Se debe a el uso de variables no definidas. En caso de que sean variables con valor fijo, definirlas como constante usando: const. En caso que sea algo variante realizarlo con let. <br />
                Estas 2 formas son las más modernas al dia de la fecha.
                <br /><br />

              </p>

            </div>

            <div className="faqs">
              <a>Error: (Cannot find module).
              </a>
              <p><br />


                Si en algún momento se encuentran con una error de esta naturaleza cómo se muestra en la foto deben saber lo siguiente:<br />
                <br />
                <strong> 1 - Es posible que los archivos requeridos están escritos de otra manera</strong><br />
                <br />
                <strong> 2 - La forma de llamar a la ruta está errada</strong><br />
                <br />
                Para solucionar esto debes:<br /><br />

                Primero <strong style={{ color: "#ff9759" }}>verificar que los archivos que estamos llamando están escrito correctamente</strong> es decir que si estamos llamando el archivo claro.js debemos escribir claro tal y como está y no escribir Claro cLaro<br />

                Segundo verificar que esté bien marcada la ruta, ejemplo:

                <div style={{ paddingLeft: "20px", padding: "10px", fontSize: "12px" }}>
                  <li>Si estamos llamando un archivo desde un archivo que se encuentra en el mismo lugar sólo debemos utilizar (" ./nombre del archivo")</li>

                  <li> Si estamos llamando un archivo que se encuentra en una carpeta desde otro que no se encuentra dentro de ninguna carpeta debemos usar ("./nombre de carpeta/nombre del archivo")</li>

                  <li> Si estamos llamando un archivo que encuentra en una carpeta desde otro archivo que también se encuentra dentro de otra carpeta usamos ("../nombre de carpeta/nombre del archivo")</li>

                  <li>Si estamos llamando un archivo que se encuentra dentro de una carpeta desde otro archivo que se encuentra dentro de dos carpetas usamos ("../../nombre de la carpeta/nombre del archivo")</li>

                </div>



                <br />
                <img src='https://cdn.discordapp.com/attachments/1060024258195116082/1060024258333519943/image.png' width={"600px"} />
                <br /><span style={{ margin: "10px", opacity: "80%" }} >Escrito por <span style={{ color: "#ff9759" }} >Berny</span></span>

              </p>

            </div>

            <div className="faqs">
              <a>Cannot find module
                .
              </a>
              <p><br />
                <span style={{ opacity: "60%" }}>Seguro que te ha tocado encontrarte con un error como este, buenos pues este error aparece cuando estás intentando ejecutar un código el cual necesita un módulo o package para funcionar, </span><br /><br /><br />

                En esta imagen podemos observar que el módulo faltante es el discord.js.<br /><br />

                Siempre que no aparezca este error tendremos en la primera línea el módulo que falta y sólo debemos proceder a instalarlo, o en la terminal hacer un <strong style={{ color: "#ff9759" }}>npm install</strong> o un <strong style={{ color: "#ff9759" }}>npm rebuild</strong> esté en caso de querer reinstalar todos los módulos, o tal vez baste con instalar el paquete directamente con <strong>npm i discord.js</strong>
                <br /><br />
                <img src='https://cdn.discordapp.com/attachments/1060197598524358697/1060197598650175508/IMG_1607.jpg' width={"600px"} />
                <br /><span style={{ margin: "10px", opacity: "80%" }} >Escrito por <span style={{ color: "#ff9759" }} >Berny</span></span>

              </p>

            </div>

            <div className="faqs">
              <a>Invalid string format & Command name is invalid. </a>
              <p><br />


                Este error ocurre cuando estamos poniendo un elemento inadecuado en un string.
                La mayoría de veces suele salir en los slashcommands, cuando ponemos el nombre del comando o el nombre de una opción de comando con: <strong>Mayus, Espacios o Símbolos</strong>
                <br />
                Si te sale este error revisa todos los comandos y comprueba que no hay ningún espacio ni mayúsculas.<br /><br />

                Forma correcta:<br />
                <strong style={{ color: "#ff9759" }}>.setName(`usuario`)</strong><br /><br />

                Forma incorrecta:<br />
                <strong style={{ color: "#ff9759" }}>.setName(`Usuario`)</strong><br />

                <br /><br />
                <img src='https://cdn.discordapp.com/attachments/1062031885322158121/1062031885947117638/image.png' width={"600px"} />
                <br /><span style={{ margin: "10px", opacity: "80%" }} >Escrito por <span style={{ color: "#ff9759" }} >Luc4s</span></span>

              </p>

            </div>

            <div className="faqs">
              <a>Error: SyntaxError</a>
              <p><br />


                <span style={{ opacity: "60%" }}>Siempre que vamos una error como este mostrado  él imagen, que en la descripción del error nos dice SyntaxError, explicado en palabras entendibles, Algo en el código está mal escrito</span><br />

                Por lo general nos muestra la ruta en la que se encuentra el error, cómo vemos en la imagen el error está en la carpeta comandos en el archivo p.js  seguido de un número que el número de línea en este caso la 34<br /><br />

                Una vez explicado esto, ustedes mismo pueden verificar dónde está lo que está mal escrito y corregirlo.<br /><br /><br />


                ! OJO este error de Syntax puede aparecer por la falta de algún carácter como en ese caso que es un simple  <strong style={{ color: "#ff9759" }}>llave </strong> !


                <br /><br />
                <img src='https://cdn.discordapp.com/attachments/1060012082721996850/1060012082860400640/IMG_1598.png' width={"600px"} />
                <br /><span style={{ margin: "10px", opacity: "80%" }} >Escrito por <span style={{ color: "#ff9759" }} >Berny</span></span>

              </p>

            </div>

            <div className="faqs">
              <a>MongooseError: Operation `Model.findOne()` buffering timed out after 10000ms</a>
              <p><br />

                <strong>¿Por que sale este error?</strong><br />
                Normalmente el error sale por que intentas obtener datos con mogoose antes de haberse conectado a la base de datos.<br /><br />

                <strong>¿Como solucionarlo?</strong><br />

                •  Tienes que asegurarte que el codigo que te conecta a la base de datos se ejecute antes de hacer la peticion.<br />
                •  Si lo tienes en un archivo por aparte, asegurate de llaamar al archivo y si es una funcion ejecutar la funcion.<br /><br />

                <br /><br />
                <img src='https://cdn.discordapp.com/attachments/1086299742130147458/1086299742360838245/Error.jpg' width={"600px"} />
                <br /><span style={{ margin: "10px", opacity: "80%" }} >Escrito por <span style={{ color: "#ff9759" }} >Loxico</span></span>

              </p>

            </div>
          </div>

        </div>


      </div>
      <Footer />
      {
        document.addEventListener("keyup", e => {

          if (e.target.matches("#buscador")) {

            if (e.key === "Escape") e.target.value = ""

            document.querySelectorAll(".faqs").forEach(faqReq => {

              faqReq.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                ? faqReq.classList.remove("filtro")
                : faqReq.classList.add("filtro")
            })

          }


        })
      }
    </>



  );
}

export default FaQApp;
