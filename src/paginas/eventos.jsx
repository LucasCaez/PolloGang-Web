
import './css/faq.css';
import Barra from '../componentes/barra';
import Footer from '../componentes/footer';

function FaQAppEventos() {




  return (

    <>
      <Barra />

      <div className="faq">
        <h1>Eventos <span style={{color:"#ffde59"}}>Discord.js V14</span></h1>
        <div className='buscador'>
          <input type="text" name="buscador" id="buscador-eventos" placeholder="Buscar eventos" />
          <a  style={{padding:"8px 10px", backgroundColor:"#2e2e32", borderRadius:"8px", marginLeft:"5px", textDecoration:"node", color:"#fff"}} href='/faq'>Ver Errores</a>
          <a  style={{padding:"8px 10px", backgroundColor:"#2e2e32", borderRadius:"8px", marginLeft:"5px", textDecoration:"node", color:"#fff"}} href='/faq/permisos'>Ver Permisos</a>
        </div>
        <div className="contenido">



          <div className="c">

          <div>
     
        <ul id="Lista">
            <li class="eventos">channelCreate</li>
            <li class="eventos">channelDelete</li>
            <li class="eventos">channelPinsUpdate</li>
            <li class="eventos">channelUpdate</li>
            <li class="eventos">debug</li>
            <li class="eventos">emojiCreate</li>
            <li class="eventos">emojiDelete</li>
            <li class="eventos">emojiUpdate</li>
            <li class="eventos">error</li>
            <li class="eventos">guildBanAdd</li>
            <li class="eventos">guildBanRemove</li>
            <li class="eventos">guildCreate</li>
            <li class="eventos">guildDelete</li>
            <li class="eventos">guildIntegrationsUpdate</li>
            <li class="eventos">guildMemberAdd</li>
            <li class="eventos">guildMemberAvailable</li>
            <li class="eventos">guildMembersChunk</li>
            <li class="eventos">guildMemberRemove</li>
            <li class="eventos">guildMemberUpdate</li>
            <li class="eventos">guildUnavailable</li>
            <li class="eventos">guildUpdate</li>
            <li class="eventos">interactionCreate</li>
            <li class="eventos">invalidated</li>
            <li class="eventos">invalidRequestWarning</li>
            <li class="eventos">inviteCreate</li>
            <li class="eventos">inviteDelete</li>
            <li class="eventos">messageCreate</li>
            <li class="eventos">messageDelete</li>
            <li class="eventos">messageDeleteBulk</li>
            <li class="eventos">messageReactionAdd</li>
            <li class="eventos">messageReactionRemove</li>
            <li class="eventos">messageReactionRemoveAll</li>
            <li class="eventos">messageReactionRemoveEmoji</li>
            <li class="eventos">messageUpdate</li>
            <li class="eventos">presenceUpdate</li>
            <li class="eventos">rateLimit</li>
            <li class="eventos">ready</li>
            <li class="eventos">roleCreate</li>
            <li class="eventos">roleDelete</li>
            <li class="eventos">roleUpdate</li>
            <li class="eventos">shardDisconnect</li>
            <li class="eventos">shardError</li>
            <li class="eventos">shardReady</li>
            <li class="eventos">shardReconnecting</li>
            <li class="eventos">shardResume</li>
            <li class="eventos">stageInstanceCreate</li>
            <li class="eventos">stageInstanceDelete</li>
            <li class="eventos">stageInstanceUpdate</li>
            <li class="eventos">stickerCreate</li>
            <li class="eventos">stickerDelete</li>
            <li class="eventos">stickerUpdate</li>
            <li class="eventos">threadCreate</li>
            <li class="eventos">threadDelete</li>
            <li class="eventos">threadListSync</li>
            <li class="eventos">threadMembersUpdate</li>
            <li class="eventos">threadMemberUpdate</li>
            <li class="eventos">typingStart</li>
            <li class="eventos">userUpdate</li>
            <li class="eventos">voiceStateUpdate</li>
            <li class="eventos">warn</li>
            <li class="eventos">webhookUpdate</li>
        </ul>

    </div>

          </div>

        </div>


      </div>
      <Footer />
      {
        document.addEventListener("keyup", e => {

          if (e.target.matches("#buscador-eventos")) {

            if (e.key === "Escape") e.target.value = ""

            document.querySelectorAll(".eventos").forEach(fruta => {

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

export default FaQAppEventos;
