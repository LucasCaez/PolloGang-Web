
import './css/faq.css';
import Barra from '../componentes/barra';
import Footer from '../componentes/footer';
import {useNavigate} from 'react-router-dom';


function FaQAppEventos() {



  const navigate = useNavigate();
  const clickERRORES = () => { navigate('/faq'); };
  const clickPerms = () => { navigate('/faq/permisos'); };

  return (

    <>
      <Barra />

      <div className="faq">
        <h1>Eventos <span style={{color:"#ffde59"}}>Discord.js V14</span></h1>
        <div className='buscador'>
          <input type="text" name="buscador" id="buscador-eventos" placeholder="Buscar eventos" />
          <button style={{ padding: "8px 10px", backgroundColor: "#2e2e32", borderRadius: "8px", marginLeft: "5px", textDecoration: "node", color: "#fff" }} onClick={clickERRORES}>Ver Errores</button>
          <button style={{ padding: "8px 10px", backgroundColor: "#2e2e32", borderRadius: "8px", marginLeft: "5px", textDecoration: "node", color: "#fff" }} onClick={clickPerms}>Ver Permisos</button>
      </div>
        <div className="contenido">



          <div className="c">

          <div>
     
        <ul id="Lista">
            <li className="eventos">channelCreate</li>
            <li className="eventos">channelDelete</li>
            <li className="eventos">channelPinsUpdate</li>
            <li className="eventos">channelUpdate</li>
            <li className="eventos">debug</li>
            <li className="eventos">emojiCreate</li>
            <li className="eventos">emojiDelete</li>
            <li className="eventos">emojiUpdate</li>
            <li className="eventos">error</li>
            <li className="eventos">guildBanAdd</li>
            <li className="eventos">guildBanRemove</li>
            <li className="eventos">guildCreate</li>
            <li className="eventos">guildDelete</li>
            <li className="eventos">guildIntegrationsUpdate</li>
            <li className="eventos">guildMemberAdd</li>
            <li className="eventos">guildMemberAvailable</li>
            <li className="eventos">guildMembersChunk</li>
            <li className="eventos">guildMemberRemove</li>
            <li className="eventos">guildMemberUpdate</li>
            <li className="eventos">guildUnavailable</li>
            <li className="eventos">guildUpdate</li>
            <li className="eventos">interactionCreate</li>
            <li className="eventos">invalidated</li>
            <li className="eventos">invalidRequestWarning</li>
            <li className="eventos">inviteCreate</li>
            <li className="eventos">inviteDelete</li>
            <li className="eventos">messageCreate</li>
            <li className="eventos">messageDelete</li>
            <li className="eventos">messageDeleteBulk</li>
            <li className="eventos">messageReactionAdd</li>
            <li className="eventos">messageReactionRemove</li>
            <li className="eventos">messageReactionRemoveAll</li>
            <li className="eventos">messageReactionRemoveEmoji</li>
            <li className="eventos">messageUpdate</li>
            <li className="eventos">presenceUpdate</li>
            <li className="eventos">rateLimit</li>
            <li className="eventos">ready</li>
            <li className="eventos">roleCreate</li>
            <li className="eventos">roleDelete</li>
            <li className="eventos">roleUpdate</li>
            <li className="eventos">shardDisconnect</li>
            <li className="eventos">shardError</li>
            <li className="eventos">shardReady</li>
            <li className="eventos">shardReconnecting</li>
            <li className="eventos">shardResume</li>
            <li className="eventos">stageInstanceCreate</li>
            <li className="eventos">stageInstanceDelete</li>
            <li className="eventos">stageInstanceUpdate</li>
            <li className="eventos">stickerCreate</li>
            <li className="eventos">stickerDelete</li>
            <li className="eventos">stickerUpdate</li>
            <li className="eventos">threadCreate</li>
            <li className="eventos">threadDelete</li>
            <li className="eventos">threadListSync</li>
            <li className="eventos">threadMembersUpdate</li>
            <li className="eventos">threadMemberUpdate</li>
            <li className="eventos">typingStart</li>
            <li className="eventos">userUpdate</li>
            <li className="eventos">voiceStateUpdate</li>
            <li className="eventos">warn</li>
            <li className="eventos">webhookUpdate</li>
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

            document.querySelectorAll(".eventos").forEach(faqReq => {

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

export default FaQAppEventos;
