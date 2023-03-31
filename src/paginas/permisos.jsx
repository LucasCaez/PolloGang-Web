
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
            <li class="permisos">CreateInstantInvite</li>
            <li class="permisos">KickMembers</li>
            <li class="permisos">BanMembers</li>
            <li class="permisos">Administrator</li>
            <li class="permisos">ManageChannels</li>
            <li class="permisos">ManageGuild</li>
            <li class="permisos">AddReactions</li>
            <li class="permisos">ViewAuditLog</li>
            <li class="permisos">PrioritySpeaker</li>
            <li class="permisos">Stream</li>
            <li class="permisos">ViewChannel</li>
            <li class="permisos">SendMessages</li>
            <li class="permisos">SendTTSMessages</li>
            <li class="permisos">ManageMessages</li>
            <li class="permisos">EmbedLinks</li>
            <li class="permisos">AttachFiles</li>
            <li class="permisos">ReadMessageHistory</li>
            <li class="permisos">MentionEveryone</li>
            <li class="permisos">UseExternalEmojis</li>
            <li class="permisos">ViewGuildInsights</li>
            <li class="permisos">Connect</li>
            <li class="permisos">Speak</li>
            <li class="permisos">MuteMembers</li>
            <li class="permisos">MoveMembers</li>
            <li class="permisos">UseVAD</li>
            <li class="permisos">ChangeNickname</li>
            <li class="permisos">ManageNicknames</li>
            <li class="permisos">ManageRoles</li>
            <li class="permisos">ManageWebhooks</li>
            <li class="permisos">ManageEmojisAndStickers</li>
            <li class="permisos">UseApplicationCommands</li>
            <li class="permisos">RequestToSpeak</li>
            <li class="permisos">ManageEvents</li>
            <li class="permisos">ManageThreads</li>
            <li class="permisos">CreatePrivateThreads</li>
            <li class="permisos">UseExternalStickers</li>
            <li class="permisos">SendMessagesInThreads</li>
            <li class="permisos">UseEmbeddedActivities</li>
            <li class="permisos">ModerateMembers</li>
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
