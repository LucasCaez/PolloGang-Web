
import './css/faq.css';
import Barra from '../componentes/barra';
import Footer from '../componentes/footer';

function FaQAppPermisos() {




  return (

    <>
      <Barra />

      <div className="faq">
        <h1>Permisos <span style={{color:"#ffde59"}}>Discord.js V14</span></h1>
        <div className='buscador'>
          <input type="text" name="buscador" id="buscador-permisos" placeholder="Buscar Permisos" />
          <a  style={{padding:"8px 10px", backgroundColor:"#2e2e32", borderRadius:"8px", marginLeft:"5px", textDecoration:"node", color:"#fff"}} href='/faq'>Ver Errores</a>
          <a  style={{padding:"8px 10px", backgroundColor:"#2e2e32", borderRadius:"8px", marginLeft:"5px", textDecoration:"node", color:"#fff"}} href='/faq/eventos'>Ver Eventos</a>
        </div>
        <div className="contenido">



          <div className="c">

          <div>
     
        <ul id="Lista">
            <li className="permisos">CreateInstantInvite</li>
            <li className="permisos">KickMembers</li>
            <li className="permisos">BanMembers</li>
            <li className="permisos">Administrator</li>
            <li className="permisos">ManageChannels</li>
            <li className="permisos">ManageGuild</li>
            <li className="permisos">AddReactions</li>
            <li className="permisos">ViewAuditLog</li>
            <li className="permisos">PrioritySpeaker</li>
            <li className="permisos">Stream</li>
            <li className="permisos">ViewChannel</li>
            <li className="permisos">SendMessages</li>
            <li className="permisos">SendTTSMessages</li>
            <li className="permisos">ManageMessages</li>
            <li className="permisos">EmbedLinks</li>
            <li className="permisos">AttachFiles</li>
            <li className="permisos">ReadMessageHistory</li>
            <li className="permisos">MentionEveryone</li>
            <li className="permisos">UseExternalEmojis</li>
            <li className="permisos">ViewGuildInsights</li>
            <li className="permisos">Connect</li>
            <li className="permisos">Speak</li>
            <li className="permisos">MuteMembers</li>
            <li className="permisos">MoveMembers</li>
            <li className="permisos">UseVAD</li>
            <li className="permisos">ChangeNickname</li>
            <li className="permisos">ManageNicknames</li>
            <li className="permisos">ManageRoles</li>
            <li className="permisos">ManageWebhooks</li>
            <li className="permisos">ManageEmojisAndStickers</li>
            <li className="permisos">UseApplicationCommands</li>
            <li className="permisos">RequestToSpeak</li>
            <li className="permisos">ManageEvents</li>
            <li className="permisos">ManageThreads</li>
            <li className="permisos">CreatePrivateThreads</li>
            <li className="permisos">UseExternalStickers</li>
            <li className="permisos">SendMessagesInThreads</li>
            <li className="permisos">UseEmbeddedActivities</li>
            <li className="permisos">ModerateMembers</li>
        </ul>

    </div>

          </div>

        </div>


      </div>
      <Footer />
      {
        document.addEventListener("keyup", e => {

          if (e.target.matches("#buscador-permisos")) {

            if (e.key === "Escape") e.target.value = ""

            document.querySelectorAll(".permisos").forEach(fruta => {

              fruta.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                ? fruta.classList.remove("filtro")
                : fruta.classList.add("filtro")
            })

          }


        })
      }
    </>



  );
}

export default FaQAppPermisos;
